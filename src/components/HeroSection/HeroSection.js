import React from 'react'
import QuriesPanda from './QuriesPanda'
import OrderdFood from "./OrderdFood"
import ListResturant from './ListResturant'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-12'>
      <OrderdFood />
      <ListResturant />
      <QuriesPanda />
    </div>
  )
}

export default HeroSection
