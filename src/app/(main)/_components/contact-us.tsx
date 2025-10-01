import {
  Facebook,
  Instagram,

  Mail,
  Phone,
  // Plus,
  // Twitter,
  Youtube,
} from "lucide-react";
import ContactInfo from "./ui/contact-info";
import Input from "@/components/ui/input";
import ArrowBtn from "@/components/ui/arrow-btn";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ArrowIcon from "@/components/icons/arrow-icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/schemas/contact-schema";
import { useSubmitMessageMutation } from "@/services/contact-api";
import toast from "react-hot-toast";
import { FormErrorMessage } from "@/components/error-message";
import GetFreeQuote from "./ui/get-free-quote";
import { useState } from "react";
import Popup from "@/components/popup";
import { FaTiktok } from "react-icons/fa";

const info = [
  {
    icon: Mail,
    text: "Game4funpcs@gmail.com",
  },
  {
    icon: Mail,
    text: "Warranty4game4funpcs@gmail.com",
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
    href: "https://www.facebook.com/p/Game4funpcs-61576901232433/",
  },
  {
    icon: Instagram,
    text: "Instagram",
    href: "https://www.instagram.com/game4funpcs/",
  },
  {
    icon: Youtube,
    text: "Youtube",
    href: "https://youtube.com/@game4funpcs?si=er13IMONx0eovbOB",
  },
  {
    icon: FaTiktok  ,
    text: "Tiktok    ",
    href: "https://tiktok.com/@game4funpcs",
  },
];

function ContactUs() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
  const [submit, { isLoading }] = useSubmitMessageMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await submit(data).unwrap();
      reset({
        email: "",
        fullName: "",
        message: "",
      });
       toast.success(res.message, {
        style: {
          border: "2px solid #d744d9",
          background: "black",
          color: "white",
          padding: "16px",
        },
        iconTheme: {
          primary: "#d744d9", // checkmark color
          secondary: "black", // circle background
        },
      });
    } catch (error: any) { //eslint-disable-line
     

      toast.error(error.data.message);
    }
  };
  return (
    <div className="p-6 md:px-24 relative" id="contact">
      <div className="flex lg:flex-row flex-col gap-8  md:justify-between items-start">
        <div className="lg:w-[45%] w-full">
          <div>
            <h1 className="text-4xl font-semibold py-4">
              Get in Touch with Us
            </h1>
            <p className="text-[#A3A3A3]">
              Have questions, feedback, or need assistance? We&apos;re here to
              help! Reach out and let’s connect
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
              <div className="flex flex-wrap gap-4 justify-between mr-7">
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 py-6"
          >
            <Input label="Full Name" type="text" {...register("fullName")} />
            <FormErrorMessage message={errors.fullName?.message} />
            <Input label="Email" type="email" {...register("email")} />
            <FormErrorMessage message={errors.email?.message} />
            <textarea
              placeholder={"Message"}
              {...register("message")}
              rows={5}
              className="w-full px-4 py-3 rounded-2xl bg-[#1d1d1d] border border-[#FFFFFF36] text-white placeholder-[#FFFFFF36] focus:outline-none focus:border-purple-500 transition"
            />
            <FormErrorMessage message={errors.message?.message} />
            <button
              type="submit"
              disabled={isLoading}
              className="relative flex justify-start items-center"
            >
              <ArrowBtn title="submit" />
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[linear-gradient(to_right,#d642db,#FFBE96)] w-full relative h-[550px] lg:h-[300px] rounded-2xl md:mt-32 md:p-12 p-4">
        <h1 className="text-5xl font-semibold py-8">CUSTOM BUILT YOUR PC</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 cursor-pointer mr-3 text-white font-medium "
        >
          <span
            className={cn(
              "bg-tansparent text-sm uppercase  -mr-4 z-50 p-2 px-1"
            )}
          >
            Get a free quote
          </span>{" "}
          <div className=" border-r border-t border-b p-[1.2px] rounded-full z-30 flex">
            <div
              className={cn(
                " rounded-full  w-10 h-10 flex  items-center justify-center"
              )}
            >
              <ArrowIcon />
            </div>
          </div>
        </button>
        <Image
          className="absolute  lg:-top-44  right-6 lg:right-28"
          src={"/images/footer-pc.png"}
          alt="pc"
          width={500}
          height={500}
        />
      </div>
      <GetFreeQuote isOpen={isOpen} setIsOpen={setIsOpen} setPopup={setPopup} />
      {popup && (
        <Popup
          title="Submitted"
          description="Quote Submitted Successfully"
          onClose={() => setPopup(false)}
        />
      )}
    </div>
  );
}

export default ContactUs;
