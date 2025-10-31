"use client";

import { RotateCw } from "lucide-react";
import React, { useState } from "react";

interface Props {
  system: any; // The API response: array or { data: [...] }
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const GamePerformanceCard: React.FC<Props> = ({ system, setShow }) => {
  // ✅ Extract array safely
  const benchmarks = Array.isArray(system) ? system : system?.data || [];

  const [selectedGame, setSelectedGame] = useState<string>(
    benchmarks[0]?.game?.name || ""
  );

  const activeBenchmark = benchmarks.find(
    (b: any) => b.game?.name === selectedGame
  );

  if (!activeBenchmark) {
    return (
      <div className="text-center text-gray-400 py-10">
        No benchmark results found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="bg-[#1c1b1b] text-white p-6 rounded-2xl shadow-lg flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Game Performance</h2>
          <div className="flex items-center gap-5">
            <RotateCw
              className="bg-custom-gradient rounded-2xl w-10 h-10 p-1 transition-transform duration-200 hover:scale-110 hover:shadow-lg cursor-pointer"
              onClick={() => setShow(false)}
            />
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="bg-[#242323] border border-[#525151] rounded-xl px-4 py-2 text-white outline-none"
            >
              {benchmarks.map((b: any, i: number) => (
                <option key={i} value={b.game?.name}>
                  {b.game?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Summary Info */}
        <div className="bg-[#242323] border border-[#525151] rounded-2xl p-5 mb-5">
          <p className="text-lg text-gray-300 text-center">
            <span className="text-purple-400">
              {activeBenchmark.cpu?.manufacturer} {activeBenchmark.cpu?.model}
            </span>{" "}
            and{" "}
            <span className="text-pink-500">
              {activeBenchmark.gpu?.manufacturer} {activeBenchmark.gpu?.model}
            </span>{" "}
            running{" "}
            <span className="text-red-400">{activeBenchmark.game?.name}</span>{" "}
            at{" "}
            <span className="text-gray-200">
              {activeBenchmark.settings?.resolution} •{" "}
              {activeBenchmark.settings?.preset}
            </span>
          </p>
        </div>

        {/* FPS Table */}
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-[#525151] border text-center">
                Setting
              </th>
              <th className="p-2 border-[#525151] border text-center">
                Average FPS
              </th>
              <th className="p-2 border-[#525151] border text-center">
                1% Low FPS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-[#525151] border text-center">
                {activeBenchmark.settings?.preset}
              </td>
              <td
                className={`p-2 border-[#525151] border text-center ${
                  activeBenchmark.fps?.avgFps >= 120
                    ? "bg-[#00FF5566]"
                    : activeBenchmark.fps?.avgFps >= 60
                    ? "bg-[#FF9D0066]"
                    : "bg-[#FF000066]"
                }`}
              >
                {activeBenchmark.fps?.avgFps} FPS
              </td>
              <td className="p-2 border-[#525151] border text-center bg-[#FF9D0066]">
                {activeBenchmark.fps?.min1Fps} FPS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamePerformanceCard;
