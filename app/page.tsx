'use client'
import {  ChangeEvent, FormEvent, useState } from "react";


export default function Home() {
  const [file, setFile] = useState<File>()
  const handleUpload = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.set('file',file as File)
    try {
      
      const resp = await fetch('/api/upload',{
           method:'POST',
           body:formData
         })
         const ga = await resp.json()
    } catch (error) {
      
      console.log(error,"ERROR FRONTEND ERROR FRONTEND ERROR FRONTEND ERROR FRONTEND ERROR FRONTEND ERROR FRONTEND ");
    }
}

  const handleInputFile = (e:ChangeEvent<HTMLInputElement>) =>{
    const files = e.currentTarget.files as FileList;
    const file = files[0]    
    setFile(file)
  }
  return (
   <main>
    <form onSubmit={handleUpload}>
    <label htmlFor="file">Your picture</label>
    <input type="file" name="file" id="" onChange={handleInputFile}  />
    <button>send</button>
    </form>
   </main>
  )
}
