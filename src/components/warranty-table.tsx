"use client";

import React from "react";

type Column = {
  key: string;
  label: string;
};

type DataRow = {
  [key: string]: string | number;
};

type TableProps = {
  columns: Column[];
  data: DataRow[];
};

export default function WarrantyTable({ columns, data }: TableProps) {
  return (
   <div className="overflow-x-auto border-[#515151]">
      <table className="min-w-[100px]  bg-[#262626]   rounded-xl overflow-hidden text-sm text-gray-200">
        <thead className="">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-center border border-[#515151]"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className=""
            //   className={rowIdx % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-2 py-3 border w-[120px] text-center border-[#515151]"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
