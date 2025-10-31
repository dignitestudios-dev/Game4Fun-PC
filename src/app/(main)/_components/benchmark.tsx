"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select, { SingleValue, MultiValue } from "react-select";
import toast from "react-hot-toast";

// 🧩 Components
import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import ArrowBtn from "@/components/ui/arrow-btn";
import Loader from "@/components/ui/loader";
import GamePerformanceCard from "@/components/game-performance-card";

// 🎮 Icons
import ProcessorIcon from "@/components/icons/processor-icon";
import GraphicCardIcon from "@/components/icons/graphic-card-icon";
import GameIcon from "@/components/icons/game-icon";

// 🧾 Schema
import { BenchmarkFormData, BenchmarkSchema } from "@/schemas/benchmark-schema";

interface OptionType {
  value: string;
  label: string;
}
interface CpuItem {
  id: string;
  manufacturer: string;
  model: string;
}
interface GpuItem {
  id: string;
  manufacturer: string;
  model: string;
}
interface GameItem {
  id: string;
  name: string;
}

const Benchmark: React.FC = () => {
  const [show, setShow] = useState(false);
  const [cpus, setCpus] = useState<CpuItem[]>([]);
  const [gpus, setGpus] = useState<GpuItem[]>([]);
  const [games, setGames] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Load JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cpuRes, gpuRes, gameRes] = await Promise.all([
          fetch("/data/cpus.json"),
          fetch("/data/gpus.json"),
          fetch("/data/games.json"),
        ]);

        const [cpuData, gpuData, gameData] = await Promise.all([
          cpuRes.json(),
          gpuRes.json(),
          gameRes.json(),
        ]);

        setCpus(cpuData);
        setGpus(gpuData);
        setGames(gameData);
      } catch (err) {
        console.error("Error loading JSON:", err);
        toast.error("Failed to load benchmark data!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ Form setup
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BenchmarkFormData>({
    resolver: zodResolver(BenchmarkSchema),
    defaultValues: {
      processor: "",
      graphicCard: "",
      game: [],
    },
  });

  // ✅ Dropdown options
  const cpuOptions = cpus.map((cpu) => ({
    value: cpu.id,
    label: `${cpu.manufacturer} ${cpu.model}`,
  }));
  const gpuOptions = gpus.map((gpu) => ({
    value: gpu.id,
    label: `${gpu.manufacturer} ${gpu.model}`,
  }));
  const gameOptions = games.map((game) => ({
    value: game.id,
    label: game.name,
  }));

  // ✅ react-select styling
  const selectStyle = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#1b1a1a",
      border: "1px solid #444",
      borderRadius: "8px",
      color: "#fff",
      minHeight: "40px",
    }),
    singleValue: (base: any) => ({ ...base, color: "#fff" }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "#1b1a1a",
      border: "1px solid #444",
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? "#3a3a3a" : "#1b1a1a",
      color: "#fff",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#2a2a2a" },
    }),
    menuList: (base: any) => ({ ...base, maxHeight: "200px" }),
  };

  // ✅ API integration
  const onSubmit = async (formData: BenchmarkFormData) => {
    try {
      setIsSubmitting(true);

      const payload = {
        cpuIds: [formData.processor],
        gpuIds: [formData.graphicCard],
        games: formData.game.map((id: string) => ({
          id,
          resolution: "1920x1080",
          preset: "High",
        })),
      };

      const res = await fetch(
        "https://api.game4funpcs.com/product/fpsCalculation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`API Error: ${res.status}`);

      const responseData = await res.json();
      console.log("🎮 API Response:", responseData);

      if (responseData.success && responseData.data?.length > 0) {
        setData(responseData.data);
        setShow(true);
        toast.success("Benchmark results fetched successfully!");
        reset();
      } else {
        toast.error("No benchmark results found.");
      }
    } catch (error) {
      console.error("❌ Error submitting benchmark:", error);
      toast.error("Failed to fetch benchmark results!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  return (
    <section className="md:p-8 w-full" id="benchmark">
      <div className="flex flex-col items-center">
        <h4 className="uppercase leading-8 text-gradient tracking-widest font-semibold text-sm">
          PC Benchmark
        </h4>
        <div className="text-5xl md:w-[40%] text-center font-semibold leading-16">
          <GradientUnderlineTitle title="Performance" classname="text-5xl" />
        </div>

        {!show ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-8 flex-wrap justify-center w-full py-10"
          >
            {/* === GPU === */}
            <div className="flex gap-4 items-center bg-[#1b1a1a] p-3 rounded-2xl md:w-[40%] w-[80%]">
              <GraphicCardIcon width="90" height="90" />
              <div className="w-full">
                <h5 className="mb-2 text-white">
                  Graphic Card* ({gpuOptions.length} available)
                </h5>
                <Controller
                  name="graphicCard"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={gpuOptions}
                      styles={selectStyle}
                      placeholder="Select Graphic Card"
                      isSearchable
                      value={
                        gpuOptions.find((opt) => opt.value === field.value) ||
                        null
                      }
                      onChange={(val: SingleValue<OptionType>) =>
                        field.onChange(val?.value)
                      }
                    />
                  )}
                />
                {errors.graphicCard && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.graphicCard.message}
                  </span>
                )}
              </div>
            </div>

            {/* === CPU === */}
            <div className="flex gap-4 items-center bg-[#1b1a1a] p-3 rounded-2xl md:w-[40%] w-[80%]">
              <ProcessorIcon width="90" height="90" />
              <div className="w-full">
                <h5 className="mb-2 text-white">
                  Processor* ({cpuOptions.length} available)
                </h5>
                <Controller
                  name="processor"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={cpuOptions}
                      styles={selectStyle}
                      placeholder="Select Processor"
                      isSearchable
                      value={
                        cpuOptions.find((opt) => opt.value === field.value) ||
                        null
                      }
                      onChange={(val: SingleValue<OptionType>) =>
                        field.onChange(val?.value)
                      }
                    />
                  )}
                />
                {errors.processor && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.processor.message}
                  </span>
                )}
              </div>
            </div>

            {/* === Games === */}
            <div className="flex gap-4 items-center bg-[#1b1a1a] p-3 rounded-2xl md:w-[40%] w-[80%]">
              <GameIcon width="90" height="90" />
              <div className="w-full">
                <h5 className="mb-2 text-white">
                  Game* ({gameOptions.length} available)
                </h5>
                <Controller
                  name="game"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      options={gameOptions}
                      styles={selectStyle}
                      placeholder="Select Games"
                      isSearchable
                      value={gameOptions.filter((opt) =>
                        field.value?.includes(opt.value)
                      )}
                      onChange={(vals: MultiValue<OptionType>) =>
                        field.onChange(vals.map((v) => v.value))
                      }
                    />
                  )}
                />
                {errors.game && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.game.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center mt-6"
            >
              {isSubmitting ? <Loader /> : <ArrowBtn title="Get Results" />}
            </button>
          </form>
        ) : (
          <GamePerformanceCard
            system={data} // ✅ clean formatted API data
            setShow={setShow}
          />
        )}
      </div>
    </section>
  );
};

export default Benchmark;
