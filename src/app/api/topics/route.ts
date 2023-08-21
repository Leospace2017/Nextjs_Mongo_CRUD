
import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:any) {
  console.log(req.nextUrl.searchParams)
  await connectMongoDb();
  const allTopic = await Topic.find()
  return NextResponse.json({ allTopic });
}




export async function POST(req: NextRequest, res: NextResponse) {
  const {title,description} = await req.json();

  console.log(title, description)

  await connectMongoDb();
  await Topic.create({ title, description });
  return NextResponse.json({
    message: "Topic created successfully",
    status: 201,
  });
}


export async function DELETE(req: NextRequest){
  const id = req.nextUrl.searchParams.get("id")
  await Topic.findByIdAndRemove(id)
  return NextResponse.json({
    message: 'Topic deleted accept'
  },{
    status:202
  })
}