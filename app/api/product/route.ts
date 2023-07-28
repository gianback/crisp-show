import { NextResponse as res } from 'next/server';
import { prisma } from '@/config/prisma';
import { uploadFile } from '@/utilities/uploadFile';

export async function POST(req: Request) {
  const formdata = await req.formData();

  const otherPictures = formdata.getAll('otherPictures') as File[];

  const urlsOtherPictures = await Promise.all(
    otherPictures.map((picture) => uploadFile(picture)),
  );

  const urlMainPicture = await uploadFile(formdata.get('mainPicture') as File);
  const price = +Number(formdata.get('price')).toFixed(2);

  const newProduct = {
    name: `${formdata.get('name')}`,
    brand: `${formdata.get('brand')}`,
    description: `${formdata.get('description')}`,
    price,
    size: Number(formdata.get('size')),
    otherPictures: urlsOtherPictures,
    mainPicture: urlMainPicture,
    categoryId: `${formdata.get('categoryId')}`,
  };

  const productCreated = await prisma.product.create({
    data: newProduct,
  });
  return res.json({ productCreated });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const queryBrand = searchParams.get('brand');
  const queryRange = searchParams.get('range');
  const queryOffset = +(searchParams.get('offset') as string);

  const [minValue, maxValue] = queryRange?.split('-') || [];
  const products = await prisma.category.findMany({
    where: {
      name: {
        equals: queryBrand || undefined,
      },
    },
    include: {
      products: {
        where: {
          price: {
            gte: +minValue || 0,
            lte: +maxValue || 99999,
          },
        },
        select: {
          id: true,
          name: true,
          brand: true,
          price: true,
          mainPicture: true,
        },
      },
    },
    skip: queryOffset || 0,
    take: 8,
  });

  return res.json({
    data: products,
    offset: queryOffset,
    count: 8 * (queryOffset ? +queryOffset : 1),
  });
}
