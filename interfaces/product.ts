import { z } from "zod";
import { productSchema } from "@/utilities/valitador";

export type Product = z.infer<typeof productSchema>;
