import { WhyChooseUs } from '@/component/about'
import { Feedback, Teams, WhatWeDo } from '@/component/home'
import { ServicesList } from '@/component/services'
import React from 'react'

const Page = () => {
  return (
    <>
     <ServicesList/>
     <WhatWeDo/>
     <WhyChooseUs/>
     <Teams/>
     <Feedback/>
    </>
  )
}

export default Page