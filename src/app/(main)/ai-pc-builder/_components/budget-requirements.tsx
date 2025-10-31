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
import { X } from "lucide-react";

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
  cooling?: string;
  psu?: string;
  storage?: string;
  caseAndAirflow?: string;
  monitor?: string;
  performance?: Record<string, string>;
};

type SuggestedPCResponse = {
  minBudgetRange: string;
  maxBudgetRange: string;
  data: SuggestedPC[];
};

// Modal Component
function DetailModal({ 
  pc, 
  minBudget, 
  maxBudget, 
  onClose 
}: { 
  pc: SuggestedPC; 
  minBudget: string; 
  maxBudget: string; 
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-white border border-white/10">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-white/10 sticky top-0 bg-[#1a1a1a]/95">
          <div className="flex-1">
            <h2 className="text-3xl font-bold uppercase tracking-widest">
              {pc.PCName}
            </h2>
            <p className="text-sm text-white/70 mt-2">{pc.PCdescription}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition ml-4"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Budget Range */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-white/10">
            <h3 className="text-sm font-semibold text-white/70 mb-2 uppercase tracking-wider">
              Budget Range
            </h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              ${minBudget} - ${maxBudget}
            </p>
          </div>

          {/* PC Components Grid */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4 tracking-wider">
              Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CPU */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Processor
                </p>
                <p className="text-lg font-semibold">{pc.cpuName}</p>
                <p className="text-sm text-white/70 mt-1">{pc.cpuSpecs}</p>
              </div>

              {/* GPU */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Graphics Card
                </p>
                <p className="text-lg font-semibold">{pc.gpuName}</p>
                <p className="text-sm text-white/70 mt-1">{pc.gpuSpecs}</p>
              </div>

              {/* RAM */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Memory
                </p>
                <p className="text-lg font-semibold">{pc.ramName}</p>
                <p className="text-sm text-white/70 mt-1">{pc.ramSpecs}</p>
              </div>

              {/* Storage */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Storage
                </p>
                <p className="text-sm text-white/70">{pc.storage || "Not specified"}</p>
              </div>

              {/* Motherboard */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Motherboard
                </p>
                <p className="text-sm text-white/70">{pc.motherboardSpecs}</p>
              </div>

              {/* Cooling */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Cooling
                </p>
                <p className="text-sm text-white/70">{pc.cooling || "Not specified"}</p>
              </div>

              {/* PSU */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Power Supply
                </p>
                <p className="text-sm text-white/70">{pc.psu || "Not specified"}</p>
              </div>

              {/* Case */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Case & Airflow
                </p>
                <p className="text-sm text-white/70">{pc.caseAndAirflow || "Not specified"}</p>
              </div>

              {/* Monitor */}
              <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg border border-white/10 transition md:col-span-2">
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  Monitor
                </p>
                <p className="text-sm text-white/70">{pc.monitor || "Not specified"}</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          {pc.performance && Object.keys(pc.performance).length > 0 && (
            <div>
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wider">
                Gaming Performance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(pc.performance).map(([game, fps]) => (
                  <div 
                    key={game} 
                    className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/10 text-center transition"
                  >
                    <p className="text-xs text-white/70 mb-2">{game}</p>
                    <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      {fps}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-3 sticky bottom-0 bg-[#1a1a1a]/95">
          <button
            onClick={onClose}
            className="px-8 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function BudgetRequirements() {
  const [pcBuilder, { isLoading }] = useAiPcBuilderMutation();
  const [suggestedPc, setSuggestedPc] = useState<SuggestedPCResponse | null>(null);
  const [selectedPc, setSelectedPc] = useState<SuggestedPC | null>(null);

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
      setSuggestedPc(res.data as any);
    }
  };

  console.log(suggestedPc, "suggestedPc");

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
              className="bg-[#2A292959] rounded-2xl group w-[300px] text-white max-w-sm p-5 flex flex-col gap-4 border border-white/10 hover:border-white/30 transition"
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

              {/* View More Button */}
              <button
                onClick={() => setSelectedPc(pc)}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-sm transition"
              >
                View More Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedPc && suggestedPc && (
        <DetailModal
          pc={selectedPc}
          minBudget={suggestedPc.minBudgetRange}
          maxBudget={suggestedPc.maxBudgetRange}
          onClose={() => setSelectedPc(null)}
        />
      )}
    </div>
  );
}

export default BudgetRequirements;