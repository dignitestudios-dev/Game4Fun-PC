import React from 'react'
import PrivacyBanner from './privacy-banner'
import PrivacyPolicyDescription from './privacy-policy-description'

type Props = {}

function PrivacyPolicy({}: Props) {
  return (
    <div><PrivacyBanner/>
    <PrivacyPolicyDescription/>
    </div>
  )
}

export default PrivacyPolicy