import { NextResponse as res } from "next/server";
import { prisma } from "@/config/prisma";
import { uploadFile } from "@/utilities/uploadFile";

export async function POST(req: Request) {
  const formdata = await req.formData();

  const otherPictures = formdata.getAll("otherPictures") as File[];

  const urlsOtherPictures = await Promise.all(
    otherPictures.map((picture) => uploadFile(picture))
  );

  const urlMainPicture = await uploadFile(formdata.get("mainPicture") as File);
  const price = +Number(formdata.get("price")).toFixed(2);

  const newProduct = {
    name: `${formdata.get("name")}`,
    brand: `${formdata.get("brand")}`,
    description: `${formdata.get("description")}`,
    price,
    sizes: formdata.getAll("sizes").map((size) => +size),
    otherPictures: urlsOtherPictures,
    mainPicture: urlMainPicture,
    categoryId: `${formdata.get("categoryId")}`,
  };

  const productCreated = await prisma.product.create({
    data: newProduct,
  });
  return res.json({ productCreated });
}

export async function GET() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      brand: true,
      price: true,
      mainPicture: true,
    },
  });
  return res.json(products);
}
