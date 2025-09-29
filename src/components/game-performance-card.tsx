import { RotateCw } from "lucide-react";
import React, { useState } from "react";

// interface BenchmarkSetting {
//   setting: string;
//   minimumFPS: number;
//   averageFPS: number;
//   maximumFPS: number;
// }

// interface GameBenchmark {
//   game: string;
//   image: string | null;
//   resolution: string;
//   settings: BenchmarkSetting[];
// }

// interface SystemBenchmark {
//   processor: string;
//   graphicCard: string;
//   ram: string;
//   screenResolution: string;
//   description: string;
//   benchmarks: GameBenchmark[];
// }

interface Props {
  system: SystemBenchmark;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const GamePerformanceCard: React.FC<Props> = ({ system, setShow }) => {
  const [selectedGame, setSelectedGame] = useState<string>(
    system.benchmarks[0]?.game || ""
  );

  const activeBenchmark = system.benchmarks.find(
    (b) => b.game === selectedGame
  );

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* 🔹 Dropdown Selector */}

      {activeBenchmark && (
        <div className="bg-[#1c1b1b] text-white p-6 rounded-2xl shadow-lg flex gap-6 w-full">
          {/* Left side - Game Cover
          <div className="flex flex-col items-center w-[15%]">
            <Image
              width={500}
              height={500}
              src={activeBenchmark.image || "/placeholder-game-cover.jpg"}
              alt={activeBenchmark.game}
              className="rounded-xl shadow-md object-cover"
            />
            <p className="mt-2 text-center text-sm">{activeBenchmark.game}</p>
          </div> */}

          {/* Right side - Performance Info */}
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">Game Performance</h2>
              <div className="flex items-center gap-5 justify-center mb-6">
                <RotateCw
                  className="bg-custom-gradient rounded-2xl w-10 h-10 p-1 transition-transform duration-200 hover:scale-110 hover:shadow-lg cursor-pointer"
                  onClick={() => setShow(false)}
                />
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="bg-[#242323] border border-[#525151] rounded-xl px-4 py-2 text-white outline-none"
                >
                  {system.benchmarks.map((benchmark, idx) => (
                    <option key={idx} value={benchmark.game}>
                      {benchmark.game}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#242323] border rounded-2xl border-[#525151]">
              <p className="text-lg text-gray-300 py-2 text-center">
                <span className="text-purple-400">{system.processor}</span> and{" "}
                <span className="text-pink-500">{system.graphicCard}</span> in{" "}
                <span className="text-red-400">{activeBenchmark.game}</span> –
                Resolution:{" "}
                <span className="text-gray-200">
                  {activeBenchmark.resolution}
                </span>
              </p>

              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 border-[#525151] border text-center">
                      Settings
                    </th>
                    <th className="p-2 border-[#525151] border text-center">
                      Minimum FPS
                    </th>
                    <th className="p-2 border-[#525151] border text-center">
                      Average FPS
                    </th>
                    <th className="p-2 border-[#525151] border text-center">
                      Maximum FPS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeBenchmark.settings.map((row, index) => (
                    <tr key={index}>
                      <td className="p-2 border-[#525151] border text-center">
                        {row.setting}
                      </td>
                      <td className="p-2 border-[#525151] border text-center bg-[#FF9D0066]">
                        {row.minimumFPS} FPS
                      </td>
                      <td
                        className={`p-2 border-[#525151] border text-center ${
                          row.setting === "Low"
                            ? "bg-[#00FF5566]"
                            : "bg-[#FF9D0066]"
                        }`}
                      >
                        {row.averageFPS} FPS
                      </td>
                      <td
                        className={`p-2 border-[#525151] border text-center ${
                          row.setting === "Medium" || row.setting === "Low"
                            ? "bg-[#00FF5566]"
                            : "bg-[#FF9D0066]"
                        }`}
                      >
                        {row.maximumFPS} FPS
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePerformanceCard;
