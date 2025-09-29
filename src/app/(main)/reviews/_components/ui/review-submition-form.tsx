"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useState } from "react";
import ArrowBtn from "@/components/ui/arrow-btn";
import { Star } from "lucide-react";
import { usePostReviewMutation } from "@/services/review-api";
import toast from "react-hot-toast";
import Loader from "@/components/ui/loader";
import Image from "next/image";

// ✅ Zod Schema
const reviewSchema = z.object({
  starRating: z
    .number()
    .min(1, "Minimum 1 star required")
    .max(5, "Maximum 5 stars allowed"),
  title: z.string().optional(),
  writtenReview: z.string().min(5, "Review must be at least 5 characters"),
  picture: z
    .any()
    .refine((file) => !file || file.length === 0 || file.length === 1, {
      message: "You can only upload one picture",
    })
    .optional(),
});

type ReviewFormType = z.infer<typeof reviewSchema>;

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function SubmitReview({ isOpen, setIsOpen }: Props) {
  const [postReview, { isLoading }] = usePostReviewMutation();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ReviewFormType>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      starRating: 1,
      title: "",
      writtenReview: "",
    },
  });

  const [hoveredStar, setHoveredStar] = useState(0);
  const currentRating = watch("starRating") || 0;
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };
  const onSubmit = async (data: ReviewFormType) => {
    const formData = new FormData();
    formData.append("review", data.writtenReview);
    if (data.title) formData.append("title", data?.title);
    formData.append("rating", data.starRating.toString());
    if (data.picture && data.picture.length > 0) {
      formData.append("reviewImage", data.picture[0]);
    }
    try {
      const res = await postReview(formData).unwrap();
      toast.success(res.message, {
        style: {
          border: "2px solid #d744d9",
          background: "black",
          color: "white",
          padding: "16px",
          fontSize: "20px",
        },
        iconTheme: {
          primary: "#d744d9",
          secondary: "black",
        },
        position: "bottom-center",
      });
      reset();
      setPreviewImage(null)
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  if(isLoading) return <Loader/>
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-scroll flex items-center justify-center z-[99999999999999]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[#1919195d] my-8 overflow-y-scroll bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#505050] text-white w-full max-w-3xl flex flex-col justify-center rounded-2xl shadow-lg p-3 px-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 pt-2">Submit Your Review</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          {/* Star Rating */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setValue("starRating", star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded"
              >
                <Star
                  size={28}
                  className={`transition-colors ${
                    star <= (hoveredStar || currentRating)
                      ? "fill-yellow-400 outline-none border-none text-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Title (optional)</label>
            <input
              type="text"
              placeholder="Great PC build experience!"
              {...register("title")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">Written Review</label>
            <textarea
              rows={4}
              placeholder="Share your experience..."
              {...register("writtenReview")}
              className="bg-[#1919195d] border border-[#505050] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.writtenReview && (
              <p className="text-red-400 text-xs">
                {errors.writtenReview.message}
              </p>
            )}
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Picture Upload (optional)</label>

            {previewImage ? (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border border-[#505050] bg-[#1919195d]">
                <Image
                fill
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage(null);
                    setValue("picture", null);
                  }}
                  className="absolute top-2 right-2 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
                <label
                  htmlFor="picture-upload"
                  className="absolute bottom-2 right-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 text-sm cursor-pointer transition-colors"
                >
                  Change
                </label>
              </div>
            ) : (
              <label
                htmlFor="picture-upload"
                className="w-full h-48 border-2 border-dashed border-[#505050] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-pink-500 transition-colors bg-[#1919195d]"
              >
                <span className="text-4xl mb-2">📷</span>
                <span className="text-sm text-gray-400">
                  Click to upload image
                </span>
              </label>
            )}

            <input
              id="picture-upload"
              type="file"
              accept="image/*"
              {...register("picture")}
              onChange={(e) => {
                register("picture").onChange(e);
                handleFileChange(e);
              }}
              className="hidden"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button type="submit">
              <ArrowBtn title="Submit Review" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
