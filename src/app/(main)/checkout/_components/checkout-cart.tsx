import { FormErrorMessage } from "@/components/error-message";
import CardBtn from "@/components/ui/card-btn";
import Input from "@/components/ui/input";
import { CheckoutFormData, checkoutSchema } from "@/schemas/contact-info";
import { usePostContactInfoMutation } from "@/services/contact-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CitySelector from "./ui/city-selector";

interface Props {
  handleNext: () => void;
}

function CheckoutCart({ handleNext }: Props) {
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [loadingCities, setLoadingCities] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setValue,
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

  const router = useRouter();

  // ✅ Fetch all countries once
  const fetchCountries = async () => {
    const url = "https://countriesnow.space/api/v0.1/countries";
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCountries(result.data.map((c: any) => c.country)); //eslint-disable-line
    } catch (error: any) {//eslint-disable-line
      console.error("Error fetching countries:", error.message);
    }
  };

  // ✅ Fetch cities when a country is selected
  const fetchCities = async (country: string) => {
    setLoadingCities(true);
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country }),
        }
      );
      const result = await response.json();
      setCities(result.data || []);
    } catch (error: any) {//eslint-disable-line
      console.error("Error fetching cities:", error.message);
      setCities([]);
    } finally {
      setLoadingCities(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const [postInfo] = usePostContactInfoMutation();

  const onSubmit = async (data: CheckoutFormData) => {
    const { saveContact, ...payload } = data;
    const params = new URLSearchParams(
      payload as Record<string, string>
    ).toString();

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
      className="mx-auto flex flex-col items-start gap-4"
    >
      <h1 className="text-xl font-semibold">My Cart</h1>

      {/* Name Fields */}
      <div className="flex w-full gap-3">
        <Input label="First Name" {...register("firstName")} />
        <FormErrorMessage message={errors?.firstName?.message} />
        <Input label="Last Name" {...register("lastName")} />
        <FormErrorMessage message={errors?.lastName?.message} />
      </div>

      {/* Address */}
      <Input label="Address" {...register("address")} />
      <FormErrorMessage message={errors?.address?.message} />

      <Input
        label="Apartment, suite, etc (optional)"
        {...register("appartment")}
      />
      <FormErrorMessage message={errors?.appartment?.message} />

      {/* Country / City / Zip */}
      <div className="flex gap-3 items-center w-full">
        {/* Country Dropdown */}
        <div className="flex-1">
          <select
            {...register("country")}
            className="w-full px-4 py-3 rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
            onChange={(e) => {
              const selected = e.target.value;
              setValue("country", selected);
              setValue("city", ""); // reset city
              if (selected) fetchCities(selected);
            }}
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <FormErrorMessage message={errors?.country?.message} />
        </div>

        {/* City Dropdown */}
        <div className="flex-1">
          <CitySelector
            cities={cities}
            value={watch("city")}
            onChange={(city) => setValue("city", city)}
            disabled={!cities.length || loadingCities}
          />
          <FormErrorMessage message={errors?.city?.message} />

          <FormErrorMessage message={errors?.city?.message} />
        </div>

        {/* Zipcode */}
        <div className="flex-1">
          <Input label="Zipcode" {...register("zipCode")} />
          <FormErrorMessage message={errors?.zipCode?.message} />
        </div>
      </div>

      {/* Save Contact */}
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          className="
    appearance-none 
    h-4 w-4 
    border-2 border-white 
    rounded 
    bg-[#262525] 
    checked:bg-pink-500 
    checked:border-pink-500 
    checked:before:content-['✓'] 
    checked:before:text-white 
    checked:before:flex 
    checked:before:items-center 
    checked:before:justify-center 
    checked:before:h-full 
    checked:before:w-full 
    checked:before:text-sm 
    cursor-pointer
  "
          {...register("saveContact")}
        />
        <h1 className="text-white text-nowrap">Save contact information</h1>
        <FormErrorMessage message={errors?.saveContact?.message} />
      </div>

      {/* Submit */}
      <button type="submit" className="flex justify-center w-full mt-14">
        <CardBtn title="Continue to shipping" bgColor="bg-[#141414]" />
      </button>
    </form>
  );
}

export default CheckoutCart;
