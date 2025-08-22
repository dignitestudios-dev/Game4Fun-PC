import { cn } from "@/lib/utils";
import  { Lora  } from "next/font/google";
const lora = Lora({
  weight: "500",   // regular
  style: "italic", // italic
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
interface GradientUnderlineTitleProps {
  title: string;
  classname?: string;

}

function GradientUnderlineTitle ({ title  , classname}: GradientUnderlineTitleProps){
  return (
    <div className="inline-block relative w-fit">
      <h2 className={cn(lora.className,"text-white  font-semibold italic" , classname ? classname :"text-4xl")}>{title}</h2>
      <div
        className="absolute left-0 bottom-1 z-[-10] h-2 w-full rounded-full"
        style={{
          background: 'linear-gradient(to right, #C100FF, #FFBE96)',
        }}
      />
    </div>
  );
};
export default GradientUnderlineTitle