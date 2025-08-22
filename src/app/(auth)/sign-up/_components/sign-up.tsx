import StyledHeader from '@/components/ui/styled-title'
import React from 'react'
import SignUpForm from './sign-up-form'

type Props = {}

function SignUp({}: Props) {
  return (
      <div className="py-18 flex justify-center items-center">
      <div className="flex flex-col gap-20 items-center w-full">
        <div className="">
          <StyledHeader
            title="sign up"
            backTitle="sign up"
            classname="right-[30%]"
          />
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp