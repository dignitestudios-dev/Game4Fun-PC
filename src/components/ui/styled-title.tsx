import { cn } from "@/lib/utils";

interface StyledHeaderProps {
  title: string;
  backTitle: string;
  classname: string;

}

const StyledHeader = ({ title,backTitle , classname }: StyledHeaderProps) => {
  return (
    <div className=" w-full  ">
      {/* Big background outlined title */}
<h1
       style={{
      WebkitTextStroke : "1px #7a5c74",
      color:"transparent",
      WebkitTextStrokeWidth: "1px"
    }}
  className={cn("absolute lg:block hidden  bg-clip-border  z-[-10]  -translate-y-1/2 text-nowrap text-[10rem] font-extrabold uppercase select-none pointer-events-none" , classname)}
>
  {backTitle}
</h1>



      {/* Foreground content */}
      <div className=" z-10">
    
        <h2 className="text-gradient text-sm  tracking-widest uppercase font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default StyledHeader;
