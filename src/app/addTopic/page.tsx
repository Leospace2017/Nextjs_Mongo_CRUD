import { Button } from "@/components/ui/Button";

export default function addTopic() {
  return (
    <form action="" className="flex flex-col items-center justify-center w-10/12 gap-y-1" >
      <input 
        className="border border-slate-300 px-6 py-2 w-full rounded-md" 
        type="text" 
        placeholder="title"
      />
      <input 
        className="border border-slate-300 px-6 py-2 w-full rounded-md" 
        type="text" 
        placeholder="description"
      />
      <Button variant={"outline"} className="bg-green-200">Add Topic</Button>
    </form> 
    )
}
