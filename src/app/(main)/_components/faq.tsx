import GradientUnderlineTitle from "@/components/ui/gradient-underlined-title"
import StyledHeader from "@/components/ui/styled-title"
import FAQCard from "./ui/faq-card"
import { useGetFaqQuery } from "@/services/faq-api"
import Loader from "@/components/ui/loader";

function FAQ() {
 const {data , isLoading} =  useGetFaqQuery();
if(isLoading) return <Loader/>
  return (
    <section id="faq" className="md:px-12  py-24">
        <div className="flex flex-col items-center justify-center gap-4 w-full" >
           <div className="relative">
          <StyledHeader title="FAQ"  backTitle="FAQ" classname="-right-[450%] z-30" />
        </div>
            <h1 className="text-5xl font-semibold text-center md:text-start">Frequently asked <span><GradientUnderlineTitle title="questions" classname="text-5xl" /></span> </h1>
            <p className="text-center md:w-[45%] text-[#BDBDBD]">Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis mattis ligula consectetur.</p>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-4 items-center p-12 md:px-20" >

             {data?.data.map((faq, idx) => (
          <FAQCard faq={faq}  key={idx} />
        ))}
        </div>
        
    </section>
  )
}

export default FAQ