import Image from 'next/image';
import React from 'react';

import forground_img from "../../assests/header-right-img.png";



const AnimatedBgImage = () => {
  return (
    <Image src={forground_img} alt='animate_image'  style={{width:'100%',animation:'star 10s ease-out infinite'}} />
  )
}

export default AnimatedBgImage