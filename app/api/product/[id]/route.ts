import { prisma } from "@/config/prisma";
import { NextResponse as res } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const foundProduct = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      brand: true,
      description: true,
      sizes: true,
      price: true,
      otherPictures: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return res.json(foundProduct);
}
