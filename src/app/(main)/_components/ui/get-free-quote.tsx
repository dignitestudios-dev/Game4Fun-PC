import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction } from "react";
import ArrowBtn from "@/components/ui/arrow-btn";
import { usePostQuoteMutation } from "@/services/contact-api";
import toast from "react-hot-toast";

// ✅ Zod Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  emailAddress: z.string().email("Invalid email address"),
 minBudgetRange: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Min budget must be a positive number",
    }),

  maxBudgetRange: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Max budget must be a positive number",
    }),
  preferredCPUBrand: z.string().min(2, "CPU brand is required"),
  preferredGPUBrand: z.string().min(2, "GPU brand is required"),
  ram: z.string().min(2, "RAM is required"),
  storage: z.string().min(2, "Storage is required"),
  additionalFeature: z.string().min(2, "Additional feature is required"),
});

type FormSchemaType = z.infer<typeof formSchema>;
interface Props {
    isOpen:boolean;
    setIsOpen:React.Dispatch<SetStateAction<boolean>>
}

export default function GetFreeQuote({ isOpen, setIsOpen }:Props) {
    const [postQuote , {isLoading}] = usePostQuoteMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      minBudgetRange: "",
      maxBudgetRange: "",
      preferredCPUBrand: "",
      preferredGPUBrand: "",
      ram: "",
      storage: "",
      additionalFeature: "",
    },
  });

  const onSubmit = async(data:FormSchemaType) => {
    const res =await postQuote(data);
    if(res.data){
        toast.success(res.data.message)
        setIsOpen(false)
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-scroll flex items-center justify-center z-[99999999999999]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[#1919195d]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#505050] text-white w-full max-w-3xl flex flex-col justify-center rounded-2xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Get Free Quote</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Full Name</label>
            <input
              type="text"
              {...register("fullName")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Email Address</label>
            <input
              type="email"
              {...register("emailAddress")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.emailAddress && <p className="text-red-400 text-xs">{errors.emailAddress.message}</p>}
          </div>

          {/* Budget Range */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Min Budget Range</label>
            <input
             type="text"
  inputMode="numeric"
              {...register("minBudgetRange")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.minBudgetRange && <p className="text-red-400 text-xs">{errors.minBudgetRange.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Max Budget Range</label>
            <input
               type="text"
  inputMode="numeric"
              {...register("maxBudgetRange")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.maxBudgetRange && <p className="text-red-400 text-xs">{errors.maxBudgetRange.message}</p>}
          </div>

          {/* CPU */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Preferred CPU</label>
            <input
              type="text"
              {...register("preferredCPUBrand")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.preferredCPUBrand && <p className="text-red-400 text-xs">{errors.preferredCPUBrand.message}</p>}
          </div>

          {/* GPU */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Preferred GPU</label>
            <input
              type="text"
              {...register("preferredGPUBrand")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.preferredGPUBrand && <p className="text-red-400 text-xs">{errors.preferredGPUBrand.message}</p>}
          </div>

          {/* RAM */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">RAM</label>
            <input
              type="text"
              {...register("ram")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.ram && <p className="text-red-400 text-xs">{errors.ram.message}</p>}
          </div>

          {/* Storage */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Storage</label>
            <input
              type="text"
              {...register("storage")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.storage && <p className="text-red-400 text-xs">{errors.storage.message}</p>}
          </div>

          {/* Additional Feature */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">Additional Feature</label>
            <textarea
              rows={4}
              {...register("additionalFeature")}
              className="bg-[#1919195d] border border-[#505050] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.additionalFeature && <p className="text-red-400 text-xs">{errors.additionalFeature.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button type="submit" disabled={isLoading}>
              <ArrowBtn title="Submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
