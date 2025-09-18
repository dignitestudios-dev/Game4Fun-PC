import { useState } from "react";

function CitySelector({
  cities,
  value,
  onChange,
  disabled,
}: {
  cities: string[];
  value: string;
  onChange: (city: string) => void;
  disabled?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);

  // Filter cities as user types
  const filteredCities = query === ""
    ? cities.slice(0, 50) // limit default list for performance
    : cities.filter((city) =>
        city.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query || value}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowList(true);
          onChange(""); // reset selected value when typing
        }}
        onFocus={() => setShowList(true)}
        disabled={disabled}
        placeholder="Select City"
        className="w-full px-4 py-3 rounded-full bg-[#1d1d1d] border border-[#FFFFFF36] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
      />

      {showList && filteredCities.length > 0 && (
        <ul className="absolute  mt-1 z-[999999]  max-h-60 w-full overflow-y-auto rounded-lg bg-[#1d1d1d] border border-[#FFFFFF36] shadow-lg">
          {filteredCities.map((city) => (
            <li
              key={city}
              onClick={() => {
                onChange(city);
                setQuery(city);
                setShowList(false);
              }}
              className="cursor-pointer px-4 py-2 text-white hover:bg-purple-600"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default CitySelector