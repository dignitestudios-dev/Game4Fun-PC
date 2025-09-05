import { cn } from "@/lib/utils";


function Specification({product}:{product:Product}) {
  const specs = [
    {
      name: "CPU",
      value: product.details.cpu,
    },
    {
      name: "CPU Cooler",
      value: product.details.cpuCooler,
    },
    {
      name: "Motherboard",
      value: product.details.motherboard,
    },
    {
      name: "Power Supply",
      value:
        product.details.powerSupply,
    },
    {
      name: "Graphics Card",
      value: product.details.graphicCards,
    },
    {
      name: "RAM",
      value: product.details.ram,
    },
    {
      name: "Storage",
      value: product.details.storage,
    },
    {
      name: "Case",
      value: product.details.cpuCase,
    },
    {
      name: "RGB Fans",
      value: product.details.rgbFans,
    },
    {
      name: "Operating System",
      value: product.details.operatingSystems,
    },
  ];
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
            <h1 className="font-semibold w-[15%]">{sp.name}</h1>{" "}
            <div className=" top-0 right-0 w-[1px] bg-gradient-to-b from-[#1C1C1C] via-gray-500 to-[#1C1C1C] z-10" />{" "}
            <h4>{sp.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specification;
