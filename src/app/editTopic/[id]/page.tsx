import EditTopicForm from "@/components/content/EditTopicForm";

const getTopics = async (id:string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{cache: "no-store"})

    if(!res.ok){
      
      throw new Error("Failed to fetch Topics")
    }
    
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function EditTopic({params}:{params : {id: string}}) {
  const { id } = params;
  const {selectedTopic} = await getTopics(id)
  const { title, description } = selectedTopic
  console.log(selectedTopic)

  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}
