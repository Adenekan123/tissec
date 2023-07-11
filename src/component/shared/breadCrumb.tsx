import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation'
import { DEFAULT_STYLES } from '@/styles/default_styles';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';

export const BreadCrumb = () => {
  const pathname  = usePathname();

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<KeyboardDoubleArrowRight sx={{color:'white'}} />} sx={{bgcolor:DEFAULT_STYLES.darkBlue,px:4,py:2,borderRadius:20}}>
      <Link underline="hover" sx={{color:'white'}} href="/">
        Home
      </Link>
        <Typography color="secondary" textTransform={"capitalize"} >
          {pathname.replace('/','')}
        </Typography>
    </Breadcrumbs>
  );
};
