"use client";
import ArrowBtn from "@/components/ui/arrow-btn";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormErrorMessage } from "@/components/error-message";
import { useForm } from "react-hook-form";
import { useAiPcBuilderMutation } from "@/services/product-api";
import ProcessorIcon from "@/components/icons/processor-icon";
import GraphicCardIcon from "@/components/icons/graphic-card-icon";
import RamIcon from "@/components/icons/ram-icon";
import MotherboardIcon from "@/components/icons/mother-board-icon";
import Loader from "@/components/ui/loader";

const budgetSchema = z.object({
  minBudgetRange: z.string().min(1, "Minimum budget is required"),
  maxBudgetRange: z.string().min(1, "Maximum budget is required"),
  useCase: z.string().min(1, "Use case is required"),
  performancePreference: z
    .string()
    .min(1, "Performance preference is required"),
  preferredBrands: z.string().min(1, "Preferred brands are required"),
  extraDescription: z.string().optional(),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

function BudgetRequirements() {
  const [pcBuilder , {isLoading}] = useAiPcBuilderMutation();
  const [suggestedPc, setSuggestedPc] = useState<BudgetRequirements | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
  });

  const onSubmit = async (data: BudgetFormData) => {
    const res = await pcBuilder(data);
    setSuggestedPc(res.data!);
  };

if(isLoading) return <Loader/>

  return (
    <div className="flex flex-col gap-8">
      {/* Form */}
      {!suggestedPc?.data && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap p-4 md:p-12 justify-between gap-8"
        >
          <div className="md:w-[45%] space-y-4">
            <h1 className="uppercase mb-4 font-bold tracking-wider text-3xl">
              Budget & Requirement
            </h1>

            <Input
              label="Minimum Budget"
              type="number"
              {...register("minBudgetRange")}
            />
            <FormErrorMessage message={errors.minBudgetRange?.message} />

            <Input
              label="Maximum Budget"
              type="number"
              {...register("maxBudgetRange")}
            />
            <FormErrorMessage message={errors.maxBudgetRange?.message} />

            <Input label="Use Case" {...register("useCase")} />
            <FormErrorMessage message={errors.useCase?.message} />

            <Input
              label="Performance Preference"
              {...register("performancePreference")}
            />
            <FormErrorMessage message={errors.performancePreference?.message} />

            <Input label="Preferred Brands" {...register("preferredBrands")} />
            <FormErrorMessage message={errors.preferredBrands?.message} />

            <textarea
              {...register("extraDescription")}
              className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
              placeholder="Extra notes..."
            />
            <FormErrorMessage message={errors.extraDescription?.message} />

            <button type="submit" className="flex justify-start items-center">
              <ArrowBtn title="Submit" />
            </button>
          </div>
        </form>
      )}

      {/* Suggestions Output */}
      {suggestedPc?.data && (
        <div className="flex flex-wrap gap-6 px-12">
          {suggestedPc.data.map((pc, index) => (
            <div
              key={index}
              className="bg-[#2A292959] rounded-2xl group w-[300px] text-white max-w-sm p-5 flex flex-col gap-4"
            >
              {/* Title + Description */}
              <div>
                <h2 className="text-xl font-bold uppercase tracking-widest ">
                  {pc.PCName}
                </h2>
                <p className="text-xs text-white/70 leading-relaxed">
                  {pc.PCdescription}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 text-xs text-white/90">
                <div className="flex gap-1 items-center">
                  <div className="w-1/5">
                    <ProcessorIcon />
                  </div>
                  <div>
                    <p className="font-medium">{pc.cpuName}</p>
                    <p className="text-[10px]">{pc.cpuSpecs}</p>
                  </div>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="w-1/5">
                    <GraphicCardIcon />
                  </div>
                  <div>
                    <p className="font-medium">{pc.gpuName}</p>
                    <p className="text-[10px]">{pc.gpuSpecs}</p>
                  </div>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="w-1/5">
                    <RamIcon />
                  </div>
                  <div>
                    <p className="font-medium">{pc.ramName}</p>
                    <p className="text-[10px]">{pc.ramSpecs}</p>
                  </div>
                </div>

                <div className="flex gap-1 items-center">
                  <div className="w-1/5">
                    <MotherboardIcon />
                  </div>
                  <div>
                    <p className="font-medium">Motherboard</p>
                    <p className="text-[10px]">{pc.motherboardSpecs}</p>
                  </div>
                </div>
              </div>

              {/* Price Placeholder (AI response has no price) */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xs">Price</h4>
                  <h1 className="text-gradient text-lg font-semibold">
                    ${suggestedPc.minBudgetRange} - $
                    {suggestedPc.maxBudgetRange}
                  </h1>
                </div>
                {/* <CardBtn title="view details" bgColor="bg-[#1C1B1B]" /> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BudgetRequirements;
