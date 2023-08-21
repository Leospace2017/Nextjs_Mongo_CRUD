
import Link from "next/link";
import { Button } from "../ui/Button";
import Icon from "../ui/Icons";
import { error } from "console";
import RemoveBtn from "../ui/RemoveBtn";
import dynamic from 'next/dynamic';

const DynamicRemoveBtn = dynamic(() => import('../ui/RemoveBtn'), { ssr: false });

type Topic = {
    _id: string,
    title?: string,
    description?: string
} 

const getTopics = async (): Promise<any> => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics`, { cache: "no-store" })
        if (!res.ok) {

            throw new Error("Failed to fetch data")
        }
        const topics = await res.json()
        return topics
    } catch { error: Error } {
        console.log(error)
    }

}


export default async function TopicList() {
    const topics = await getTopics()
    console.log(topics)
    return (
        <>
            {topics.allTopic?.map((topic: Topic) => {
                return <main
                    key={topic?._id}
                    className="flex justify-between border gap-4 p-6 min-w-full">
                    <div className="flex flex-col gap-y-2">
                        <h1>{topic?.title}</h1>
                        <p>{topic?.description}</p>
                    </div>
                    <div className="flex justify-between gap-x-1">
                        <Button variant={"destructive"}>
                        <DynamicRemoveBtn id={topic?._id}>
                                <Icon name="trash-2" className="my-auto w-4" />
                            </DynamicRemoveBtn>
                        </Button>
                        <Link href={`/editTopic/${topic?._id}`}>
                            <Button variant={"default"} ><Icon name="plus-square" className="my-auto w-4" /></Button>
                        </Link>
                    </div>
                </main >
            }
            )}

        </>
    )
}
