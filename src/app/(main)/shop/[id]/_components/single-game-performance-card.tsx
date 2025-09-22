import Image from "next/image";
import React, { useState } from "react";

interface SupportedGame {
  _id: string;
  gameName: string;
  image: string;
  description: string;
  ultraMinimumFPS: number;
  ultraAverageFPS: number;
  ultraMaximumFPS: number;
  highMinimumFPS: number;
  highAverageFPS: number;
  highMaximumFPS: number;
  mediumMinimumFPS: number;
  mediumAverageFPS: number;
  mediumMaximumFPS: number;
  lowMinimumFPS: number;
  lowAverageFPS: number;
  lowMaximumFPS: number;
}

interface Props {
  games: SupportedGame[];
}

const SingleGamePerformanceCard: React.FC<Props> = ({ games }) => {
  const [selectedGame, setSelectedGame] = useState<string>(
    games[0]?._id || ""
  );

  const activeGame = games.find((g) => g._id === selectedGame);

  const mapGameToSettings = (game: SupportedGame) => [
    {
      setting: "Ultra",
      minimumFPS: game.ultraMinimumFPS,
      averageFPS: game.ultraAverageFPS,
      maximumFPS: game.ultraMaximumFPS,
    },
    {
      setting: "High",
      minimumFPS: game.highMinimumFPS,
      averageFPS: game.highAverageFPS,
      maximumFPS: game.highMaximumFPS,
    },
    {
      setting: "Medium",
      minimumFPS: game.mediumMinimumFPS,
      averageFPS: game.mediumAverageFPS,
      maximumFPS: game.mediumMaximumFPS,
    },
    {
      setting: "Low",
      minimumFPS: game.lowMinimumFPS,
      averageFPS: game.lowAverageFPS,
      maximumFPS: game.lowMaximumFPS,
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {activeGame && (
        <div className="bg-[#1c1b1b] text-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 w-full">
          {/* Left side - Game Cover */}
          <div className="flex flex-col items-center w-full md:w-[20%]">
            <Image
              width={300}
              height={300}
              src={activeGame.image || "/placeholder-game-cover.jpg"}
              alt={activeGame.gameName}
              className="rounded-xl shadow-md object-contain w-32 h-full sm:w-40 sm:h-40 md:w-full md:h-auto"
            />
            <p className="mt-2 text-center text-sm sm:text-base font-medium">
              {activeGame.gameName}
            </p>
          </div>

          {/* Right side - Performance Info */}
          <div className="flex flex-col w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Game Performance
              </h2>
              <select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="bg-[#242323] border border-[#525151] rounded-xl px-3 py-2 text-sm sm:text-base text-white outline-none"
              >
                {games.map((game) => (
                  <option key={game._id} value={game._id}>
                    {game.gameName}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 py-3 text-center sm:text-left">
              <span className="text-red-400 font-semibold">{activeGame.gameName}</span>{" "}
              – {activeGame.description}
            </p>

            {/* Table (scrollable on small screens) */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr>
                    <th className="p-2 border border-[#525151] text-center">
                      Settings
                    </th>
                    <th className="p-2 border border-[#525151] text-center">
                      Min FPS
                    </th>
                    <th className="p-2 border border-[#525151] text-center">
                      Avg FPS
                    </th>
                    <th className="p-2 border border-[#525151] text-center">
                      Max FPS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mapGameToSettings(activeGame).map((row, index) => (
                    <tr key={index}>
                      <td className="p-2 border border-[#525151] text-center">
                        {row.setting}
                      </td>
                      <td className="p-2 border border-[#525151] text-center bg-[#FF9D0066]">
                        {row.minimumFPS} FPS
                      </td>
                      <td
                        className={`p-2 border border-[#525151] text-center ${
                          row.setting === "Low"
                            ? "bg-[#00FF5566]"
                            : "bg-[#FF9D0066]"
                        }`}
                      >
                        {row.averageFPS} FPS
                      </td>
                      <td
                        className={`p-2 border border-[#525151] text-center ${
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

export default SingleGamePerformanceCard;
