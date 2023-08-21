'use client'
import { Button } from "@/components/ui/Button";
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";




export default function AddTopic() {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
  })

  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!topic.title || !topic.description) {
      alert("title and description are required")
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic)
      })

      if (res.ok) {
        const choice:boolean = confirm("back?");
        if(choice) {
          router.push("/")
          router.refresh()
        }
      } else {
        throw new Error("Failed to create new Topic")
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-10/12 gap-y-1" >

      <input
        className="border border-slate-300 px-6 py-2 w-full rounded-md"
        type="text"
        placeholder="title"
        onChange={(e) => setTopic({ ...topic, title: e.target.value })}
        value={topic.title}
      />
      <input
        className="border border-slate-300 px-6 py-2 w-full rounded-md"
        type="text"
        placeholder="description"
        onChange={e => setTopic({ ...topic, description: e.target.value })}
        value={topic.description}
      />
      <Button type="submit" variant={"outline"} className="bg-green-200">Add Topic</Button>
    </form>
  )
}
