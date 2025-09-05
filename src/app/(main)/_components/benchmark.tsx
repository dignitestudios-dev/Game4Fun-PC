"use client";
import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import React, { useState } from "react";
import BenchmarkDropdown from "./ui/benchmark-dropdown";
import ArrowBtn from "@/components/ui/arrow-btn";
import ProcessorIcon from "@/components/icons/processor-icon";
import GraphicCardIcon from "@/components/icons/graphic-card-icon";
import RamIcon from "@/components/icons/ram-icon";
import ScreenIcon from "@/components/icons/screen-icon";
import GameIcon from "@/components/icons/game-icon";
import { BenchmarkFormData, BenchmarkSchema } from "@/schemas/benchmark-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import GameTagsInput from "./ui/game-tag-input";
import { useAiSuggestionMutation } from "@/services/product-api";
import toast from "react-hot-toast";
import GamePerformanceCard from "@/components/game-performance-card";
import Loader from "@/components/ui/loader";

function Benchmark() {
  const [aiSuggest, { data, isLoading }] = useAiSuggestionMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BenchmarkFormData>({
    resolver: zodResolver(BenchmarkSchema),
  });

  const onSubmit = async (data: BenchmarkFormData) => {
    const newData = {
      Processor: data.processor,
      GraphicCard: data.graphicCard,
      RAM: data.ram,
      ScreenResolution: data.resolution,
      FavoriteGames: data.game,
    };
    try {
      const res = await aiSuggest(newData).unwrap();
      console.log(res);
    } catch (error: any) { //eslint-disable-line
      toast.error(error?.data.message);
    }
  };
  if (isLoading) return <Loader />;
  return (
    <section className="p-8 w-full" id="benchmark">
      <div className="flex flex-col items-center">
        <h4 className="uppercase leading-8 text-gradient tracking-widest font-semibold text-sm">
          pc benchmark
        </h4>
        <div className="text-5xl md:w-[40%] text-center font-semibold leading-16">
          <span>
            <GradientUnderlineTitle title="Performance" classname="text-5xl" />
          </span>{" "}
        </div>
        {!data && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-8 flex-wrap justify-center w-full py-10"
          >
            <BenchmarkDropdown
              icon={<ProcessorIcon width="90" height="90" />}
              title="Processor"
              {...register("processor")}
              error={errors.processor?.message}
            />

            <BenchmarkDropdown
              icon={<GraphicCardIcon width="90" height="90" />}
              title="Graphic Card"
              {...register("graphicCard")}
              error={errors.graphicCard?.message}
            />

            <BenchmarkDropdown
              icon={<RamIcon width="90" height="90" />}
              title="RAM"
              {...register("ram")}
              error={errors.ram?.message}
            />

            <BenchmarkDropdown
              icon={<ScreenIcon width="90" height="90" />}
              title="Resolution"
              {...register("resolution")}
              error={errors.resolution?.message}
            />

            <GameTagsInput
              icon={<GameIcon width="90" height="90" />}
              title="Game"
              name="game"
              setValue={setValue}
              watch={watch}
              error={errors.game?.message}
            />
            <button type="submit" className="w-full flex justify-center mt-6">
              <ArrowBtn title="get results" />
            </button>
          </form>
        )}

        {data! && <GamePerformanceCard system={data!} />}
      </div>
    </section>
  );
}

export default Benchmark;
