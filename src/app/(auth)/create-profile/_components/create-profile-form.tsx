"use client";
import { useRef, useState } from "react";
import AuthInput from "../../_components/auth-input";
import ArrowBtn from "@/components/ui/arrow-btn";
import Image from "next/image";
import { useCompleteProfileMutation } from "@/services/auth-api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function CreateProfileForm() {
  const [complete ] = useCompleteProfileMutation();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    if (!formData.fullName || !formData.address || !formData.phoneNumber) {
      return toast.error("Please fill all fields");
    }
    if (!file) {
      return toast.error("Please select profile image");
    }
    data.append("fullName", formData.fullName);
    data.append("phone", formData.phoneNumber);
    data.append("address", formData.address);
    data.append("profilePicture", file);

    const res = await complete(data).unwrap();
    console.log(res)
    if (res.error) {
      if ("data" in res.error) {
        toast.error((res.error.data as any)?.message); // eslint-disable-line
      } else {
        toast.error("Something went wrong.");
      }
      return;
    }
    if (res.message) {
      toast.success(res.message);
      router.push("/")
    }
  };

  return (
    <div className="bg-[#2A2929CC] rounded-2xl p-8 w-[30%] relative z-50">
      <div className="flex flex-col gap-4 items-center">
        <div
          className="w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center cursor-pointer border-purple-500 transition"
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

        <AuthInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <AuthInput
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          type="text"
        />
        <AuthInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
        />

        <button onClick={handleSubmit}>
          <ArrowBtn title="confirm" />
        </button>
      </div>
    </div>
  );
}

export default CreateProfileForm;
