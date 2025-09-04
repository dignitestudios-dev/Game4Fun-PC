"use client";
import React from "react";
import ArrowBtn from "./ui/arrow-btn";
interface Props {
    handleClose : ()=>void;
    popup:boolean;
    html:any;  //eslint-disable-line
    effectiveDate?:string;
    governingLaw?:string;
}
function PopupDropdown({handleClose , popup , html , effectiveDate , governingLaw}:Props) {

  return (
    <div>
      {popup && (
        <div onClick={handleClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center ">
    
          <div className="bg-[#111]   z-[99999999999999999]  text-white max-w-2xl h-[80vh] w-full rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
            {effectiveDate && governingLaw &&  
            <div className="mb-6">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Effective Date:</span> {effectiveDate}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Governing Law:</span> {governingLaw}
              </p>
            </div>
            
            }
<div dangerouslySetInnerHTML={{__html:html}} />

            <div className="relative z-[99999999999999999999999]  flex justify-end mt-10">
              <button
                onClick={()=>handleClose()}
                className="flex items-center cursor-pointer gap-2 bg-transparent text-white font-semibold px-5 py-2 rounded-full relative"
              >
               <ArrowBtn title="close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupDropdown;
