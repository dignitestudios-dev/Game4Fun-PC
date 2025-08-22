import { Mail } from 'lucide-react'
import React from 'react'

type Props = {
    info: {
        icon: any;
        text: string;
    }
}

function ContactInfo({info}: Props) {
  return (
      <div className="flex items-center gap-4">
                <div className="bg-[linear-gradient(to_right,#C100FF,#FFBE96)] p-[1.2px] rounded-2xl flex">
                  <div className=" rounded-full w-10 h-10 flex items-center justify-center">
                    {<info.icon size={20}/>}
                  </div>
                </div>
                <h3>{info.text}</h3>
              </div>
  )
}

export default ContactInfo