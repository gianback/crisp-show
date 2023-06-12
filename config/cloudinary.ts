import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_PUBLIC_API_KEY, CLOUDINARY_SECRET_KEY } from "@/utilities/constants";
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ?? '', 
    api_key: process.env.CLOUDINARY_PUBLIC_API_KEY ?? '', 
    api_secret: process.env.CLOUDINARY_SECRET_KEY ?? '' 
  });
  
const onDone = (error:any,result:any) =>{
  if(error){
    return { success: false, error }
  }else{
   return  { success: true, result }
  }
}
export const handleUploadFile = async (image:any) =>{
  try {
    
    const imageUrl = cloudinary.uploader.upload_stream({ resource_type: "image" }, onDone).end(image)
    
    return imageUrl

  } catch (error:any) {
    console.log(error,"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~mi error~~~~~~~~~~~~~~~~~~~~~~~~~");
    
  }


}