/** @format */

import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='my-10 flex items-center justify-center bg-green-50 rounded-lg'>
      <Image
        src='/banner.png'
        alt='banner'
        width={300}
        height={400}
        className='object-cover'
      />
    </div>
  )
}

export default Banner
