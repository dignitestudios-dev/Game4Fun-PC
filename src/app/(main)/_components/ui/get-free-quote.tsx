import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction } from "react";
import ArrowBtn from "@/components/ui/arrow-btn";
import { usePostQuoteMutation } from "@/services/contact-api";

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
  motherboard: z.string().min(2, "Motherboard is required"),
  cooling: z.string().min(2, "Cooling preference is required"),
  psu: z.string().min(2, "PSU is required"),
  caseSize: z.string().min(2, "Case size is required"),
  caseColor: z.string().min(2, "Case color is required"),
  caseStyle: z.string().min(2, "Case style is required"),
  monitorResolution: z.string().min(2, "Monitor resolution is required"),
  games: z.string().min(2, "Games list is required"),
  graphicsSetting: z.string().min(2, "Graphics setting & FPS are required"),
  additionalFeature: z.string().min(2, "Additional feature is required"),
});

type FormSchemaType = z.infer<typeof formSchema>;
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  setPopup: React.Dispatch<SetStateAction<boolean>>;
}

export default function GetFreeQuote({ isOpen, setIsOpen, setPopup }: Props) {
  const [postQuote, { isLoading }] = usePostQuoteMutation();
  const {
    register,
    handleSubmit,
    reset,
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
      motherboard: "",
      cooling: "",
      psu: "",
      caseSize: "",
      caseColor: "",
      caseStyle: "",
      monitorResolution: "",
      games: "",
      graphicsSetting: "",
      additionalFeature: "",
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    console.log(data);
    const res = await postQuote(data);
    if (res.data) {
      setIsOpen(false);
      setPopup(true);
      reset();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-scroll flex items-center justify-center z-[99999]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[#1919195d] my-8 mt-[600px] overflow-y-scroll bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#505050] text-white w-full max-w-4xl flex flex-col justify-center rounded-2xl shadow-lg p-3 px-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 pt-2">Get Free Quote</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          {/* Full Name */}
          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col col-span-2">
            <label className="text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              {...register("emailAddress")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.emailAddress && (
              <p className="text-red-400 text-xs">
                {errors.emailAddress.message}
              </p>
            )}
          </div>

          {/* Budget Range */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Min Budget Range</label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Min Budget"
              {...register("minBudgetRange")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.minBudgetRange && (
              <p className="text-red-400 text-xs">
                {errors.minBudgetRange.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Max Budget Range</label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Max Budget"
              {...register("maxBudgetRange")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.maxBudgetRange && (
              <p className="text-red-400 text-xs">
                {errors.maxBudgetRange.message}
              </p>
            )}
          </div>

          {/* CPU */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Preferred CPU</label>
            <input
              type="text"
              placeholder="CPU"
              {...register("preferredCPUBrand")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.preferredCPUBrand && (
              <p className="text-red-400 text-xs">
                {errors.preferredCPUBrand.message}
              </p>
            )}
          </div>

          {/* GPU */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Preferred GPU</label>
            <input
              type="text"
              placeholder="GPU"
              {...register("preferredGPUBrand")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.preferredGPUBrand && (
              <p className="text-red-400 text-xs">
                {errors.preferredGPUBrand.message}
              </p>
            )}
          </div>

          {/* RAM */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">RAM</label>
            <input
              type="text"
              placeholder="RAM"
              {...register("ram")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.ram && (
              <p className="text-red-400 text-xs">{errors.ram.message}</p>
            )}
          </div>

          {/* Storage */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Storage</label>
            <input
              type="text"
              placeholder="Storage"
              {...register("storage")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.storage && (
              <p className="text-red-400 text-xs">{errors.storage.message}</p>
            )}
          </div>

          {/* Motherboard */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Motherboard</label>
            <input
              type="text"
              placeholder="Motherboard"
              {...register("motherboard")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.motherboard && (
              <p className="text-red-400 text-xs">
                {errors.motherboard.message}
              </p>
            )}
          </div>

          {/* Cooling */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Cooling (Air / AIO)</label>
            <input
              type="text"
              placeholder="Cooling"
              {...register("cooling")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.cooling && (
              <p className="text-red-400 text-xs">{errors.cooling.message}</p>
            )}
          </div>

          {/* PSU */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">PSU</label>
            <input
              type="text"
              placeholder="Power Supply"
              {...register("psu")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.psu && (
              <p className="text-red-400 text-xs">{errors.psu.message}</p>
            )}
          </div>

          {/* Case Size */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Case Size</label>
            <select
              {...register("caseSize")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            >
              <option value="">Select Case Size</option>
              <option value="Mini-ITX">Mini-ITX</option>
              <option value="Mid-ATX">Mid-ATX</option>
              <option value="Full Tower ATX">Full Tower ATX</option>
            </select>
            {errors.caseSize && (
              <p className="text-red-400 text-xs">{errors.caseSize.message}</p>
            )}
          </div>

          {/* Case Color */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Case Color</label>
            <select
              {...register("caseColor")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            >
              <option value="">Select Color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
            {errors.caseColor && (
              <p className="text-red-400 text-xs">{errors.caseColor.message}</p>
            )}
          </div>

          {/* Case Style */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Case Style</label>
            <select
              {...register("caseStyle")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            >
              <option value="">Select Style</option>
              <option value="Mesh">Mesh</option>
              <option value="Glass">Glass</option>
            </select>
            {errors.caseStyle && (
              <p className="text-red-400 text-xs">{errors.caseStyle.message}</p>
            )}
          </div>

          {/* Monitor Resolution */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Monitor Resolution</label>
            <select
              {...register("monitorResolution")}
              className="bg-[#1919195d] border border-[#505050] rounded-full px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            >
              <option value="">Select Resolution</option>
              <option value="1080p">1080p</option>
              <option value="1440p">1440p</option>
              <option value="4K">4K</option>
            </select>
            {errors.monitorResolution && (
              <p className="text-red-400 text-xs">
                {errors.monitorResolution.message}
              </p>
            )}
          </div>

          {/* Games */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">Games (comma separated)</label>
            <textarea
              rows={2}
              placeholder="e.g., Valorant, GTA V, Cyberpunk 2077"
              {...register("games")}
              className="bg-[#1919195d] border border-[#505050] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.games && (
              <p className="text-red-400 text-xs">{errors.games.message}</p>
            )}
          </div>

          {/* Graphics Settings */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">
              Desired Graphics Setting & FPS
            </label>
            <textarea
              rows={2}
              placeholder="e.g., High settings, 60 FPS"
              {...register("graphicsSetting")}
              className="bg-[#1919195d] border border-[#505050] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.graphicsSetting && (
              <p className="text-red-400 text-xs">
                {errors.graphicsSetting.message}
              </p>
            )}
          </div>

          {/* Additional Feature */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">Additional Feature</label>
            <textarea
              rows={4}
              {...register("additionalFeature")}
              className="bg-[#1919195d] border border-[#505050] rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500"
            />
            {errors.additionalFeature && (
              <p className="text-red-400 text-xs">
                {errors.additionalFeature.message}
              </p>
            )}
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
