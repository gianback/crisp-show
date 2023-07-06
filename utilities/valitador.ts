import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string({
      required_error: "Please enter a name",
      invalid_type_error: "Please enter a valid name",
    })
    .nonempty(),
});

export const productSchema = z.object({
  name: z
    .string({
      required_error: "Please enter a name",
      invalid_type_error: "Please enter a valid name",
    })
    .nonempty(),
  brand: z
    .string({
      required_error: "Please enter a brand",
      invalid_type_error: "Please enter a valid brand",
    })
    .nonempty(),
  description: z
    .string({
      required_error: "Please enter a description",
      invalid_type_error: "Please enter a valid description",
    })
    .nonempty(),
  sizes: z
    .number({
      required_error: "Please enter a size",
      invalid_type_error: "Please enter a valid size",
    })
    .array()
    .nonempty(),
  price: z
    .number({
      required_error: "Please enter a price",
      invalid_type_error: "Please enter a valid price",
    })
    .nonnegative({
      message: "Please enter a integrer price",
    }),
  pictures: z
    .string({
      required_error: "Please enter a picture",
      invalid_type_error: "Please enter a valid picture",
    })
    .array()
    .nonempty(),
  categoryId: z
    .string({
      required_error: "Please enter a category uid",
      invalid_type_error: "Please enter a valid uid",
    })
    .nonempty(),
});
