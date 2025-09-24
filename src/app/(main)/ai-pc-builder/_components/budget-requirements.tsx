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

// ------------------ SCHEMA ------------------
const budgetSchema = z.object({
  minBudgetRange: z.string().min(1, "Minimum budget is required"),

  maxBudgetRange: z.string().min(1, "Maximum budget is required"),

  cpu: z.string().min(1, "CPU is required"),

  gpu: z.string().min(1, "GPU is required"),

  ram: z.string().min(1, "RAM is required"),

  storage: z.string().min(1, "Storage is required"),

  motherboard: z.string().min(1, "Motherboard is required"),

  cooling: z.string().min(1, "Cooling option is required"),

  psu: z.string().min(1, "PSU is required"),

  caseAndAirflow: z.string().min(1, "Case & airflow info is required"),

  monitor: z.string().min(1, "Monitor is required"),

  games: z.union([
    z.string().min(1, "At least one game is required"),
    z.array(z.string().min(1)).min(1, "At least one game is required"),
  ]),

  setting: z.string().min(1, "Graphics setting is required"),
});

type BudgetFormData = z.infer<typeof budgetSchema>;

type SuggestedPC = {
  PCName: string;
  PCdescription: string;
  cpuName: string;
  cpuSpecs: string;
  gpuName: string;
  gpuSpecs: string;
  ramName: string;
  ramSpecs: string;
  motherboardSpecs: string;
};

type SuggestedPCResponse = {
  minBudgetRange: string;
  maxBudgetRange: string;
  data: SuggestedPC[];
};

function BudgetRequirements() {
  const [pcBuilder, { isLoading }] = useAiPcBuilderMutation();
  const [suggestedPc, setSuggestedPc] = useState<SuggestedPCResponse | null>(
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
    if (res.data) {
      setSuggestedPc(res.data as any); //eslint-disable-line
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-8">
      {/* Form */}
      {!suggestedPc?.data && (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-12">
          <h1 className="uppercase mb-8 font-bold tracking-wider text-3xl">
            Budget & Requirement
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
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

              <Input label="CPU" {...register("cpu")} />
              <FormErrorMessage message={errors.cpu?.message} />

              <Input label="GPU" {...register("gpu")} />
              <FormErrorMessage message={errors.gpu?.message} />

              <Input label="RAM" {...register("ram")} />
              <FormErrorMessage message={errors.ram?.message} />

              <Input label="Storage" {...register("storage")} />
              <FormErrorMessage message={errors.storage?.message} />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Input label="Motherboard" {...register("motherboard")} />
              <FormErrorMessage message={errors.motherboard?.message} />

              <Input label="Cooling (air/aio)" {...register("cooling")} />
              <FormErrorMessage message={errors.cooling?.message} />

              <Input label="PSU" {...register("psu")} />
              <FormErrorMessage message={errors.psu?.message} />

              <Input label="Case & Airflow" {...register("caseAndAirflow")} />
              <FormErrorMessage message={errors.caseAndAirflow?.message} />

              <Input label="Monitor" {...register("monitor")} />
              <FormErrorMessage message={errors.monitor?.message} />

              <Input label="Games (comma separated)" {...register("games")} />
              <FormErrorMessage message={errors.games?.message} />

              <Input label="Graphics Setting" {...register("setting")} />
              <FormErrorMessage message={errors.setting?.message} />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 flex justify-start items-center"
          >
            <ArrowBtn title="Submit" />
          </button>
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
                <h2 className="text-xl font-bold uppercase tracking-widest">
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

              {/* Price Range */}
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xs">Price</h4>
                  <h1 className="text-gradient text-lg font-semibold">
                    ${suggestedPc.minBudgetRange} - $
                    {suggestedPc.maxBudgetRange}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BudgetRequirements;
