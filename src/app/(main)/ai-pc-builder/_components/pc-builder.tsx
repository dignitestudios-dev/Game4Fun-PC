import React from 'react'
import PCBanner from './pc-builder-banner'
import BudgetRequirements from './budget-requirements'

type Props = {}

function PCBuilder({}: Props) {
  return (
    <div>
        <PCBanner/>
        <BudgetRequirements/>
    </div>
  )
}

export default PCBuilder