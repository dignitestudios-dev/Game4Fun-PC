import CardBtn from "@/components/ui/card-btn";
import Input from "@/components/ui/input";
import React from "react";
interface Props {
  handleNext: ()=>void
}
function CheckoutCart({handleNext}:Props) {
  return (
    <div className=" mx-auto flex flex-col items-start gap-4">
      <h1 className="text-xl font-semibold ">My Cart</h1>
      {/* <div className='w-[45%]' ></div> */}
      <div className="flex w-[100%] gap-3">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>
      <Input label="Address" />
      <Input label="Apartment, suite, etc (optional)"/>
      <div className="flex gap-3 items-center">
        <Input label="Country" />
        <Input label="City" />
        <Input label="Zipcode" />
      </div>
      <div className="flex gap-3 items-center w-[10%]">
        <Input type="checkbox" className="bg-transparent" />
        <h1 className="text-white text-nowrap">Save contact information</h1>
      </div>
      <div onClick={handleNext} className="flex justify-center w-full mt-14" >
      <CardBtn  title="Continue to shipping" bgColor="bg-[#141414]" />
    </div>
    </div>
  );
}

export default CheckoutCart;
