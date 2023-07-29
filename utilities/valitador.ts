import { z } from 'zod';

export const categorySchema = z.object({
  name: z
    .string({
      required_error: 'Please enter a name',
      invalid_type_error: 'Please enter a valid name',
    })
    .nonempty(),
});

export const productSchema = z.object({
  name: z
    .string({
      required_error: 'Please enter a name',
      invalid_type_error: 'Please enter a valid name',
    })
    .nonempty(),
  brand: z
    .string({
      required_error: 'Please enter a brand',
      invalid_type_error: 'Please enter a valid brand',
    })
    .nonempty(),
  price: z.number().multipleOf(0.01).nonnegative({
    message: 'Please enter a positive price',
  }),
  otherPictures: z.instanceof(File).array().nonempty(),
  mainPicture: z.instanceof(File),
  attributes: z.unknown(),
  categoryId: z
    .string({
      required_error: 'Please enter a category uid',
      invalid_type_error: 'Please enter a valid uid',
    })
    .nonempty(),
});
