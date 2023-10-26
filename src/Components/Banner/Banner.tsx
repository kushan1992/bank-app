import React, { useState } from 'react';

interface IBanner {
    text: string
}
const Banner = (prop: IBanner) => {
  
  return (
    <div className='h-[380px] rounded-[25px] pt-[35px] pl-[85px] pr-[85px] relative'>
       <p className='leading-snug break-words text-4xl font-semibold text-center text-primary'>{prop.text}</p>
    </div>
  )
}

export default Banner;