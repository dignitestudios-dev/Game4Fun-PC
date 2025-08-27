import { cn } from "@/lib/utils";

const specs = [
  {
    name: "CPU",
    value: "Ryzen 9 9950X Processor",
  },
  {
    name: "CPU Cooler",
    value: "MSI MAG CORELIQUID E360 AIO Liquid Cooler",
  },
  {
    name: "Motherboard",
    value: "MSI X870 GAMING PLUS WIFI DDR5 AM5 Motherboard",
  },
  {
    name: "Power Supply",
    value:
      "CORSAIR RM850e 850 Watt 80 Plus Gold Certified Full Modular Power Supply",
  },
  {
    name: "Graphics Card",
    value: "ZOTAC GAMING GeForce RTX 5070 Ti SOLID OC Graphics Card",
  },
  {
    name: "RAM",
    value: "G.SKILL Trident Z5 32GB (2 × 16GB) DDR5 6000MHz RAM",
  },
  {
    name: "Storage",
    value: "Samsung 990 PRO PCIe 1TB NVME GEN4",
  },
  {
    name: "Case",
    value: "Lian Li o11 Vision Case",
  },
  {
    name: "RGB Fans",
    value: "with 8X Aegis Case Fans infinity",
  },
  {
    name: "Operating System",
    value: "Windows 11 Pro",
  },
];

function Specification() {
  return (
    <div className="py-8 ">
      <h1 className="text-2xl tracking-widest font-bold mb-4 uppercase">full Specification</h1>
      <div className="">
        {specs.map((sp, idx) => (
          <div
            key={idx}
            className={cn(
              idx % 2
                ? " bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[#2A292959]"
                : "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-[#48484859]",
              idx == 0 && "rounded-t-2xl",
              idx == specs.length - 1 && "rounded-b-2xl",
              " flex gap-12 p-2 px-12 tracking-widest"
            )}
          >
            <h1 className="font-semibold ">{sp.name}</h1>{" "}
            <div className=" top-0 right-0 w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C] z-10" />{" "}
            <h4>{sp.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specification;
