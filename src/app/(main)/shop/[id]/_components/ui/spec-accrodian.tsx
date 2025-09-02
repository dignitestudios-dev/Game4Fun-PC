import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface SpecItem {
  id: string
  type: string
  title: string
  price: number
  details?: { label: string; price: number }[]
}

const specs: SpecItem[] = [
  {
    id: "cpu",
    type: "CPU",
    title: "Ryzen 9 9950X Processor",
    price: 179907,
    details: [
      { label: "CPU Mathematical Operations", price: 179907 },
      { label: "CPU Common Algorithms", price: 179907 },
      { label: "CPU Multi-Core", price: 179907 }
    ]
  },
  {
    id: "ram",
    type: "MEM",
    title: "32 GB DDR5 6000MHz RAM",
    price: 179907
  },
  {
    id: "gpu",
    type: "GPU",
    title: "Zotac RTX 5070 Ti 16GB Graphics Card",
    price: 179907
  }
]

export default function SpecAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4 md:w-[60%]">
      {specs.map((spec) => {
        const isOpen = openId === spec.id
        return (
          <div
            key={spec.id}
            className="rounded-xl  bg-[#2A292959] text-white shadow-md overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggle(spec.id)}
              className="w-full flex items-center justify-between px-4 py-6 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center text-center text-sm font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  {spec.type}
                </span>
                <span className="text-lg font-medium">{spec.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-semibold">{spec.price}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-300 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden px-6`}
            >
              <div className="py-3 space-y-2">
                {spec.details?.map((detail, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span>{detail.label}</span>
                    <span className="text-pink-400">{detail.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
