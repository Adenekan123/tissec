import { CSSProperties } from '@mui/material/styles/createTypography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';




const AnimatedBgImage = ({img,styles}:{img:StaticImageData,styles:CSSProperties}) => {
  return (
    <Image src={img} alt='animate_image'  style={{width:'100%',...styles}} />
  )
}

export default AnimatedBgImage