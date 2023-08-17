import Link from "next/link";
import { Button } from "../ui/Button";
import Icon from "../ui/Icons";

export default function TopicList() {
    return (
        <main className="flex justify-between border gap-4 p-6">
            <div className="flex flex-col gap-y-2">
                <h1>Topics</h1>
                <p>Topics description</p>
            </div>
            <div className="flex justify-between gap-x-1">
                <Button variant={"destructive"} ><Icon name="trash-2" className="my-auto w-4" /></Button>
                <Link href={"/editTopic/1"}>
                    <Button variant={"default"} ><Icon name="plus-square" className="my-auto w-4" /></Button>
                </Link>
            </div>
        </main>
    )
}
