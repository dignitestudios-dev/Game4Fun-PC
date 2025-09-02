import SpecAccordion from "./ui/spec-accrodian"


function BenchmarkScore() {
  return (
    <div  >
        <div className="flex md:flex-row flex-col gap-4 justify-between" >
        <div className="uppercase w-[70%] flex flex-col gap-5 justify-center">
            <h3 className="text-sm tracking-widest text-gradient">Benchmark</h3>
            <h1 className=" text-5xl font-semibold">Benchmark score</h1>
            <h1 className="text-gradient text-5xl font-semibold">335384</h1>
        </div>
        <SpecAccordion/>
    </div>
    </div>
  )
}

export default BenchmarkScore