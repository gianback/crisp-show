import { NextResponse, NextResponse as res } from "next/server";
import { handleUploadFile } from "@/config/cloudinary";
import { ImageCloudinaryResponse } from "@/interfaces/cloudinary";
import { prisma } from "@/config/prisma";
export async function POST(req: Request) {
  const formdata = await req.formData();

  const picturesArray = formdata.getAll("pictures") as File[];
  const urlsPictures = await Promise.all(
    picturesArray.map(async (picture) => {
      const arrayBuffer = await picture.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const { url }: ImageCloudinaryResponse = (await handleUploadFile(
        buffer,
        "products"
      )) as ImageCloudinaryResponse;
      return url;
    })
  );

     const newProduct = {
      name: formdata.get("name") as string,
      brand: formdata.get("brand") as string,
      description: formdata.get("description") as string,
      price: parseInt(formdata.get("price") as string, 10),
      sizes: formdata.getAll('sizes').map((size) => +size),
      pictures: urlsPictures,
     };

  const productCreated = await prisma.product.create({data: newProduct});

  return res.json({ mssg: productCreated });
}

export async function GET(){
  const products = await prisma.product.findMany()
  return  res.json(products)
}
