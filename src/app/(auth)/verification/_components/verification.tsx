import StyledHeader from '@/components/ui/styled-title'
import React from 'react'
import VerificationForm from './verfication-form'


function Verification() {
  return (
      <div className="py-18 flex justify-center items-center">
      <div className="flex flex-col gap-20 items-center w-full">
        <div className="">
          <StyledHeader
            title="verfication"
            backTitle="verfication"
            classname="right-[15%]"
          />
        </div>
<VerificationForm/>
      </div>
    </div>
  )
}

export default Verification