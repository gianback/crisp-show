import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { productSchema } from './utilities/valitador';

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/api/product') &&
    request.method === 'POST'
  ) {
    const formData = await request.formData();
    const product = Object.fromEntries(formData);

    const validateProduct = {
      ...product,
      mainPicture: formData.get('mainPicture') as File,
      otherPictures: formData.getAll('otherPictures') as File[],
      price: Number(formData.get('price')),
    };

    try {
      productSchema.parse(validateProduct);
    } catch (error) {
      const errorMessages = error.issues.map(({ path, message }: any) => ({
        field: path[0],
        message,
      }));
      return NextResponse.json(errorMessages);
    }
  }
}

export const config = {
  matcher: ['/api/:path*'],
};
