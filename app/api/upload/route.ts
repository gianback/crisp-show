import { NextResponse } from "next/server";
import { handleUploadFile } from "@/config/cloudinary";
import { ImageCloudinaryResponse } from "@/interfaces/cloudinary";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("image") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const { url }: ImageCloudinaryResponse = (await handleUploadFile(
      buffer,
      "products"
    )) as ImageCloudinaryResponse;
    return NextResponse.json({ imageUrl: url });
  } catch (error) {
    console.log(error, "~~~~~~~~~~~~~~~~error~~~~~~");
  }

  //   return NextResponse.json({ test: "t" });
}
