import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ?? "",
  api_key: process.env.CLOUDINARY_PUBLIC_API_KEY ?? "",
  api_secret: process.env.CLOUDINARY_SECRET_KEY ?? "",
});

export const handleUploadFile = async (image: Buffer, folder: string) => {
  return new Promise((res, rej) => {
    const theTransformStream = cloudinary.uploader.upload_stream(
      { resource_type: "image", folder },
      (err, result) => {
        if (err) return rej(err);
        res(result);
      }
    );
    let str = Readable.from(image);
    str.pipe(theTransformStream);
  });
};
