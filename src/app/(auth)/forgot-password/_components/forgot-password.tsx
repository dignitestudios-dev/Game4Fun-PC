"use client"
import StyledHeader from '@/components/ui/styled-title'
import React, { useState } from 'react'
import EmailForm from './email-form'
import OtpForm from './otp-form'
import ChangePasswordForm from './change-password-form'

function ForgotPassword() {
    const [active , setActive] = useState<number>(0)
    const handleNextActive = () =>{
        setActive(prev=>prev+1)
    }

    
  return (
        <div className="py-18 flex relative justify-center items-center">
      <div className="flex flex-col gap-20 items-center w-full">
        <div className="">
          <StyledHeader
            title="forgot password"
            backTitle="forgot password"
            classname="right-[8%] text-9xl"
          />
        </div>
        {active == 0 && <EmailForm handleNextActive={handleNextActive} />}
        {active == 1 && <OtpForm handleNextActive={handleNextActive} />}
        {active == 2 && <ChangePasswordForm handleNextActive={handleNextActive} />}
      </div>
    </div>
  )
}

export default ForgotPassword