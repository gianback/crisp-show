import { NextResponse as res } from "next/server";
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

  //   const newProduct = {
  //     name: formdata.get("name") as string,
  //     brand: formdata.get("brand") as string,
  //     description: formdata.get("description") as string,
  //     size: formdata.get("size"),
  //     price: formdata.get("price"),
  //     pictures: urlsPictures,
  //   };

  const productCreated = await prisma.product.create({
    data: {
      name: formdata.get("name") as string,
      brand: formdata.get("brand") as string,
      description: formdata.get("description") as string,
      price: parseInt(formdata.get("price") as string, 10),
      sizes: [1, 2, 3],
      pictures: urlsPictures,
    },
  });

  return res.json({ mssg: productCreated });
}
