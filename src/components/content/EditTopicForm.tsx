'use client'
import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

export default function EditTopicForm({id, title, description}: {id:string , title: string, description: string}) {

  const router = useRouter();
  const [topic, setTopic] = useState({
    title: title,
    description: description,
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(topic)
      })

      if(res.ok){
        router.refresh();
        router.push("/")
      }else{
        throw new Error("Failed to update Topic")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-10/12 gap-y-1" >
    <input 
      onChange={e => setTopic({...topic, title: e.target.value})}
      value={topic.title}
      className="border border-slate-300 px-6 py-2 w-full rounded-md" 
      type="text" 
      placeholder="title"
    />
    <input 
      onChange={e => setTopic({...topic, description: e.target.value})}
      value={topic.description}
      className="border border-slate-300 px-6 py-2 w-full rounded-md" 
      type="text" 
      placeholder="description"
    />
    <Button variant={"outline"} className="bg-green-200">Update Topic</Button>
  </form> 
  )
}
