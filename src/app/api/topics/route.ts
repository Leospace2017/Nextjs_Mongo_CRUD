
import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any, res: NextApiResponse) {
  const {title,description} = await req.json();

  console.log(title, description)

  await connectMongoDb();
  await Topic.create({ title, description });
  return NextResponse.json({
    message: "Topic created successfully",
    status: 201,
  });
}
