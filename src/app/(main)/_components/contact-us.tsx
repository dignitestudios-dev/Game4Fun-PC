import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  // Plus,
  Twitter,
} from "lucide-react";
import ContactInfo from "./ui/contact-info";
import Input from "@/components/ui/input";
import ArrowBtn from "@/components/ui/arrow-btn";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-icon";

const info = [
  {
    icon: Mail,
    text: "game4funpcs@gmail.com",
  },
  {
    icon: Mail,
    text: "warranty4game4funpcs@gmail.com",
  },
  {
    icon: Phone,
    text: "(689) 269-0097",
  },
];

const links = [
  {
    icon: Facebook,
    text: "Facebook",
  },
  {
    icon: Twitter,
    text: "Twitter X",
  },
  {
    icon: Instagram,
    text: "Instagram",
  },
  {
    icon: Linkedin,
    text: "LinkedIn",
  },
];
function ContactUs() {
  return (
    <div className="p-12 md:px-24 relative" id="contact">
    
      <div className="flex lg:flex-row flex-col gap-8  md:justify-between items-start">
        <div className="lg:w-[45%] w-full">
          <div>
            <h1 className="text-4xl font-semibold py-4">
              Get in Touch with Us
            </h1>
            <p className="text-[#A3A3A3]">
              Have questions, feedback, or need assistance? We&apos;re here to help!
              Reach out and let’s connect
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-semibold py-5">Contact Information</h1>
            <div className="flex flex-col gap-4">
              {info.map((i, idx) => (
                <ContactInfo info={i} key={idx} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold py-5 ">Social Links </h1>
            <div className="space-y-5 w-[80%]">
              <div className="flex flex-wrap justify-between gap-4">
                {links.slice(0, 2).map((i, idx) => (
                  <ContactInfo info={i} key={idx} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 justify-between">
                {links.slice(2, 4).map((i, idx) => (
                  <ContactInfo info={i} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] w-full ">
          <div>
            <h1 className="text-4xl font-semibold py-4">
              We’d Love to Hear From You!
            </h1>
            <p className="text-[#A3A3A3]">
              Have a question or suggestion? Fill out the form below, and our
              team will get back to you as soon as possible. Your feedback helps
              us improve and grow!
            </p>
          </div>
          <div className="flex flex-col gap-4 py-6">
            <Input label="Full Name" type="text" required />
            <Input label="Email" type="email" required />
            <textarea
              placeholder={"Message"}
              rows={5}
              className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-[#FFFFFF36] text-[#FFFFFF36] placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
            />
            <div className="relative flex justify-start items-center">
            <ArrowBtn title="submit" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(to_right,#d642db,#FFBE96)] w-full relative h-[700px] lg:h-[300px] rounded-2xl md:mt-32 p-12">
        <h1 className="text-5xl font-semibold py-8">CUSTOM BUILT YOUR PC</h1>
           <button
          //   onClick={onDetailsClick}
          className="flex items-center gap-2 mr-3 text-white font-medium "
        >
          <span className={cn("bg-[#d94ad7] text-sm uppercase -mr-4 z-50 p-2 px-1" )}>
            Get a free quote
          </span>{" "}
          <div className=" border p-[1.2px] rounded-full z-30 flex">
            <div className={cn( " rounded-full  w-10 h-10 flex  items-center justify-center")}>
              <ArrowIcon />
            </div>
          </div>
        </button>
        <Image className="absolute  lg:-top-44  right-6 lg:right-28" src={"/images/footer-pc.png"} alt="pc" width={500} height={500} />
      </div>
    </div>
  );
}

export default ContactUs;
