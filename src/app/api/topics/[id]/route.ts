import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT ( req : NextRequest, {params} : {params: {id : string}}){
    const  { id }  = params;
    const { title, description } = await req.json()
    console.log(req.json())
    await connectMongoDb()
    await Topic.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "successful updated"}, {status: 202})

}

export async function GET (req: NextRequest, {params}: {params: {id : string}}) {
    const { id } = params;

    await connectMongoDb();
    const selectedTopic = await Topic.findOne({_id: id})
    return NextResponse.json({selectedTopic}, {status: 200})

}