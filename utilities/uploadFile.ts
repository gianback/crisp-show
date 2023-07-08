import { ImageCloudinaryResponse } from "@/interfaces/cloudinary";
import { cloudinaryService } from "@/services/cloudinary.service";

export const uploadFile = async (picture: File) => {
  const arrayBuffer = await picture.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { url }: ImageCloudinaryResponse = (await cloudinaryService(
    buffer
  )) as ImageCloudinaryResponse;

  return url;
};
