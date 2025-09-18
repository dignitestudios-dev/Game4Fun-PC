"use client";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Input from "@/components/ui/input";
import ArrowBtn from "@/components/ui/arrow-btn";
import { useUpdateProfileMutation } from "@/services/auth-api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function ProfileDetail() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
  });
  useEffect(() => {
    try {
      // 👇 Get raw cookie
      const rawUser = Cookies.get("userData");

      if (rawUser) {
        // 👇 Decode and parse
        const parsedUser = JSON.parse(decodeURIComponent(rawUser));

        // 👇 Set into form state
        setFormData({
          fullName: parsedUser.fullName || "",
          phoneNumber: parsedUser.phone || "",
          address: parsedUser.address || "",
        });
      }
    } catch (err) {
      console.error("Failed to parse user cookie:", err);
    }
  }, []);
  const rawUserData = Cookies.get("userData");
  const userData = rawUserData ? JSON.parse(rawUserData) : null;
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

    const res = await updateProfile(data).unwrap();
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
      router.push("/");
      setOpen(false);
    }
  };
  return (
    <div className="bg-[#2A2929CC] p-5 px-10 rounded-3xl mb-20 w-[90%] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              userData
                ? (userData?.profilePicture as string)
                : "/images/man.png"
            }
            alt="man"
            width={150}
            height={150}
            className="w-32 h-32 object-cover border border-dashed border-pink-600 rounded-full"
          />
          <h1>{userData?.fullName}</h1>
        </div>

        {/* Pencil Button */}
        <button
          onClick={() => setOpen(true)}
          className="border rounded-full p-2 relative z-50 border-pink-600"
        >
          <SquarePen />
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-wrap items-center gap-32 py-10">
        <div className="text-sm">
          <h3 className="text-[#959393]">Email Address</h3>
          <h1>{userData?.email}</h1>
        </div>
        <div className="text-sm">
          <h3 className="text-[#959393]">Phone Number</h3>
          <h1>{userData?.phone}</h1>
        </div>
        <div className="text-sm">
          <h3 className="text-[#959393]">Address</h3>
          <h1>{userData?.address}</h1>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-[#2A2929] relative flex flex-col gap-4 items-center rounded-xl p-6 w-[90%] max-w-md text-white shadow-lg">
            {/* ❌ Cross Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              ✕
            </button>

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

            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              type="text"
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
            />

            <button onClick={handleSubmit} disabled={isLoading}>
              <ArrowBtn title="confirm" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDetail;
