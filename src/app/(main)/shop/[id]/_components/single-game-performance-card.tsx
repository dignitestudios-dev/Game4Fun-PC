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
    <div className="flex flex-col gap-10 w-full">
      {activeGame && (
        <div className="bg-[#1c1b1b] text-white p-6 rounded-2xl shadow-lg flex gap-6 w-full">
          {/* Left side - Game Cover */}
          <div className="flex flex-col items-center w-[15%]">
            <Image
              width={500}
              height={500}
              src={activeGame.image || "/placeholder-game-cover.jpg"}
              alt={activeGame.gameName}
              className="rounded-xl shadow-md object-cover"
            />
            <p className="mt-2 text-center text-sm">{activeGame.gameName}</p>
          </div>

          {/* Right side - Performance Info */}
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">Game Performance</h2>
              <div className="flex justify-center mb-6">
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="bg-[#242323] border border-[#525151] rounded-xl px-4 py-2 text-white outline-none"
                >
                  {games.map((game) => (
                    <option key={game._id} value={game._id}>
                      {game.gameName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#242323] border rounded-2xl border-[#525151]">
              <p className="text-lg text-gray-300 py-2 text-center">
                <span className="text-red-400">{activeGame.gameName}</span> –{" "}
                {activeGame.description}
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
                  {mapGameToSettings(activeGame).map((row, index) => (
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

export default SingleGamePerformanceCard;
