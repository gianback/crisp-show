import { NextResponse as res } from 'next/server';
import { prisma } from '@/config/prisma';
import { uploadFile } from '@/utilities/uploadFile';
import { limiter } from '../config/limiter';

export async function POST(req: Request) {
  const formdata = await req.formData();

  const otherPictures = formdata.getAll('otherPictures') as File[];
  const { name, brand, categoryId, attributes } = Object.fromEntries(formdata);

  /* URLS FROM Cloudinary */
  const urlsOtherPictures = await Promise.all(
    otherPictures.map((picture) => uploadFile(picture)),
  );
  const urlMainPicture = await uploadFile(formdata.get('mainPicture') as File);

  /* format price to Float */
  const price = +Number(formdata.get('price')).toFixed(2);

  const newProduct = {
    name: name as string,
    brand: brand as string,
    price,
    otherPictures: urlsOtherPictures,
    mainPicture: urlMainPicture,
    categoryId: categoryId as string,
    attributes: JSON.parse(attributes as string),
  };

  const productCreated = await prisma.product.create({
    data: newProduct,
  });
  return res.json({ productCreated });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const remaining = await limiter.removeTokens(1);

  if (remaining < 0) {
    return new Response(null, {
      status: 429,
      statusText: 'Too many request',
    });
  }

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
