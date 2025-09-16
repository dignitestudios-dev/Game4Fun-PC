import { FormErrorMessage } from "@/components/error-message";
import CardBtn from "@/components/ui/card-btn";
import Input from "@/components/ui/input";
import { CheckoutFormData, checkoutSchema } from "@/schemas/contact-info";
import { usePostContactInfoMutation } from "@/services/contact-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface Props {
  handleNext: () => void;

}
function CheckoutCart({ handleNext }: Props) {
  const {
    // control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      appartment: "",
      country: "",
      city: "",
      zipCode: "",
      saveContact: false,
    },
    mode: "onBlur",
  });
  const router = useRouter()

  const [postInfo] = usePostContactInfoMutation();
  const onSubmit = async (data: CheckoutFormData) => {
    const { saveContact, ...payload } = data;
        const params = new URLSearchParams(payload as Record<string, string>).toString();
    if (saveContact) {
      try {
        const res = await postInfo(payload);
        toast.success(res.data.message);
      } catch (error: any) {//eslint-disable-line
        
        toast.error(error.data.message);
      }
    }
    router.push(`/checkout?${params}`);
    handleNext();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mx-auto flex flex-col items-start gap-4"
    >
      <h1 className="text-xl font-semibold ">My Cart</h1>
      {/* <div className='w-[45%]' ></div> */}
      <div className="flex w-[100%] gap-3">
        <Input label="First Name" {...register("firstName")} />
        <FormErrorMessage message={errors?.firstName?.message} />
        <Input label="Last Name" {...register("lastName")} />
        <FormErrorMessage message={errors?.lastName?.message} />
      </div>
      <Input label="Address" {...register("address")} />
      <FormErrorMessage message={errors?.address?.message} />
      <Input
        label="Apartment, suite, etc (optional)"
        {...register("appartment")}
      />
      <FormErrorMessage message={errors?.appartment?.message} />
      <div className="flex gap-3 items-center">
        <Input label="Country" {...register("country")} />
        <FormErrorMessage message={errors?.country?.message} />
        <Input label="City" {...register("city")} />
        <FormErrorMessage message={errors?.city?.message} />
        <Input label="Zipcode" {...register("zipCode")} />
        <FormErrorMessage message={errors?.zipCode?.message} />
      </div>
      <div className="flex gap-3 items-center w-[10%]">
        <Input
          type="checkbox"
          className="bg-transparent"
          {...register("saveContact")}
        />
        <FormErrorMessage message={errors?.saveContact?.message} />
        <h1 className="text-white text-nowrap">Save contact information</h1>
      </div>
      <button type="submit" className="flex justify-center w-full mt-14">
        <CardBtn title="Continue to shipping" bgColor="bg-[#141414]" />
      </button>
    </form>
  );
}

export default CheckoutCart;
