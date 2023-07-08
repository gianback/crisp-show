import { prisma } from "@/config/prisma";
import { NextResponse as res } from "next/server";

export async function POST(req: Request) {
  const { name } = await req.json();
  const newCategory = await prisma.category.create({ data: { name } });
  return res.json(newCategory);
}

export async function GET() {
  const categories = await prisma.category.findMany();
  return res.json(categories);
}
