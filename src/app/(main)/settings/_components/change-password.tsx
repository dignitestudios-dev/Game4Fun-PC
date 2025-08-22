
import React from 'react'
import Input from './input'
import ArrowBtn from '@/components/ui/arrow-btn'

type Props = {}

function ChangePassword({}: Props) {
  return (
    <div className='py-2 pl-8 w-full h-screen'>
          <h1 className="uppercase text-gradient text-2xl font-semibold mb-8 tracking-wider">
              Change password
            </h1>
            <div className='flex flex-col gap-3 w-[400px]'>
                <Input label='Old Password' />
                <Input label='New Password' />
                <Input label='Confirm Password' />
                <div className='flex justify-center ' >
                <ArrowBtn title='save' />
            </div></div>
    </div>
  )
}

export default ChangePassword