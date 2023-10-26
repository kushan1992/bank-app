import React, { useState } from 'react';

interface IImageCard {
    image: any;
}

const ImageCard = (prop: IImageCard) => {
  
  return (
    <div className='h-[348px] rounded-[25px] pt-[35px] pl-[24px] pr-[17px] relative flex items-center justify-center'>
        <img src={prop.image} alt="card-img" className='h-[100%]'/>
    </div>
  )
}

export default ImageCard;