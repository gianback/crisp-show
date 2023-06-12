import { NextResponse } from "next/server";
import { handleUploadFile } from "@/config/cloudinary";
import { UploadStream } from "cloudinary";

export async function POST (req:Request){
    const data =  await req.formData()
    const file = data.get('file') as File
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    try {
        const image = await handleUploadFile(buffer) as UploadStream
        console.log({image:image});
        
    } catch (error) {
        console.log(error,"~~~~~~~~~~~~~~~~error~~~~~~");
        
    }
    
    return NextResponse.json({test:'t'})



}