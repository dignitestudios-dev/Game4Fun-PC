import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title";
import StyledHeader from "@/components/ui/styled-title";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className=" relative text-white md:p-12">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8  p-6 rounded-lg relative">
        <div className="bg-[url(/images/services-bg.png)] md:block hidden absolute z-20 w-[85%] h-full bg-contain bg-no-repeat left-[45%] top-[57%] -translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col justify-start space-y-6 my-8">
          <StyledHeader title="our services" classname="left-6" backTitle="our Services" />
          <h2 className="text-5xl  font-semibold mb-24">
           Here&apos;s
            <span className="italic font-semibold">
            {" "}  <GradientUnderlineTitle title="what we" classname="text-5xl" />
            </span>{" "}
            Offer
          </h2>
          <div className="bg-[#2A292959]/50 py-4 backdrop-filter backdrop-blur-sm  rounded-xl overflow-hidden shadow-lg z-50">
            <div className="p-5 space-y-4">
              <h3 className="text-xl tracking-wide font-semibold">Custom Gaming PC Builds</h3>
              <p className="text-[#A3A3A3]  tracking-wide mt-2">
                Fully personalized systems for gaming, streaming, or content
                creation — engineered for your budget and preferences.
              </p>
              
              <Image
                src="/images/step-1.png"
                alt="Custom Gaming PC Builds"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="backdrop-filter py-4 bg-[#2A292959]/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg z-50">
            <div className="p-5 space-y-5">
              <h3 className="text-xl tracking-wide font-semibold">Upgrades & Repairs</h3>
              <p className="text-[#A3A3A3]  mt-2">
                Boost your current PC or bring it back to life. We upgrade CPUs,
                GPUs, RAM, SSDs, power supplies, and more.
              </p>
              <Image
                src="/images/step-2.png"
                alt="Upgrades & Repairs"
                width={600}
                height={400}
                className="w-full  object-cover"
              />
            </div>
          </div>
          <div className="backdrop-filter py-4 bg-[#2A292959]/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg z-50">
            <div className="p-5 space-y-5">
              <h3 className="text-xl tracking-wide font-semibold">
                System Optimization & Tuning
              </h3>
              <p className="text-[#A3A3A3] mt-2">
                Fine-tune drivers, update software, and tweak your system for
                smooth, high-FPS performance.
              </p>
              <Image
                src="/images/step-3.png"
                alt="System Optimization & Tuning"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
