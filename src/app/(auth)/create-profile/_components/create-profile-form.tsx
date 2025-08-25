"use client";
import { useRef, useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Image from "next/image";
function CreateProfileForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[30%] relative  z-50">
      <div className="flex flex-col gap-4 items-center ">
           <div
        className="w-32 h-32 rounded-full border-2 border-dashed  flex items-center justify-center cursor-pointer border-purple-500 transition"
        onClick={() => fileInputRef.current?.click()}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Selected"
            width={200}
            height={200}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="text-gray-400 text-sm">+ Upload</span>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
        <AuthInput label="Full Name" />

          <AuthInput label="Phone Number" type="text" />
          <AuthInput label="Address" type="text" />
         
 
        <ArrowBtn title="confirm" />
      </div>

    </div>
  );
}

export default CreateProfileForm;
