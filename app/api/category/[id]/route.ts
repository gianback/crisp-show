import { prisma } from '@/config/prisma';
import { NextResponse as res } from 'next/server';

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
    select: {
      products: true,
    },
  });
  return res.json(category?.products);
}
