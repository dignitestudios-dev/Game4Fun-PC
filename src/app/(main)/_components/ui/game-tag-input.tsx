import React, { useState, KeyboardEvent } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

interface Props {
  title: string;
  icon: React.ReactNode;
  name: string;
  error?: string;
  setValue: UseFormSetValue<any>; //eslint-disable-line
  watch: UseFormWatch<any>;//eslint-disable-line
}

function GameTagsInput({ title, icon, name, error, setValue, watch }: Props) {
  const [inputValue, setInputValue] = useState("");
  const tags: string[] = watch(name) || [];

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        const newTags = [...tags, inputValue.trim()];
        setValue(name, newTags, { shouldValidate: true });
      }
      setInputValue("");
    }
  };

  const removeTag = (tag: string) => {
    const newTags = tags.filter((t) => t !== tag);
    setValue(name, newTags, { shouldValidate: true });
  };

  return (
    <div className="bg-[#1b1a1a] relative p-3 rounded-2xl md:w-[40%] w-[80%]">
      <div className="flex gap-4 items-center">
        {icon}
        <div className="w-full">
          <h5 className="mb-4 capitalize">{title}*</h5>
          <div className="relative w-full">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Type ${title} and press Enter`}
              className={`border ${
                error ? "border-red-500" : "border-[#525151]"
              } w-full rounded-full p-2 px-6 bg-[#242323] outline-none`}
            />
          </div>
          {/* Tags Display */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2"
              >
                {tag}
                <button
                  type="button"
                  className="ml-1 text-red-300 hover:text-red-500"
                  onClick={() => removeTag(tag)}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default GameTagsInput;
