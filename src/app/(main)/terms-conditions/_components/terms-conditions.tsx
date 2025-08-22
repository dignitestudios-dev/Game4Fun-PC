import React from 'react'
import TermsBanner from './terms-banner'
import TermsDescription from './terms-description'

type Props = {}

function TermsConditions({}: Props) {
  return (
    <div>
        <TermsBanner/>
        <TermsDescription/>
    </div>
  )
}

export default TermsConditions