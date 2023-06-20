import React, { ReactNode } from 'react';
import {ButtonBase} from '@mui/material'
import { DEFAULT_STYLES } from '@/styles/default_styles';

export const SocialButton = ({children}:{children:ReactNode}) => {
  return (
    <ButtonBase sx={{fontSize:'16px',width:'40px',height:'40px',borderRadius:'10px',backgroundColor:DEFAULT_STYLES.softerBlue,color:'white',":hover":{bgcolor:DEFAULT_STYLES.warning}}}>
                {children}
    </ButtonBase>
  )
}

