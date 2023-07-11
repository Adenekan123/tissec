"use client"
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { SocialButton } from '../shared'
import { FaFacebookF } from 'react-icons/fa'
import { Instagram, Twitter } from '@mui/icons-material'
import { DEFAULT_STYLES } from '@/styles/default_styles'
import Image from 'next/image'
import banner_img from "../../assests/whiz-cyber-banner.png";

export const BannerContent = () => {
  return (
    <Grid
          container
          sx={{ py: 14, position: "relative", px: { xs: 2, md: 10 } }}
          spacing={{ xs: 4, md: 0 }}
          alignItems={"center"}
          wrap="wrap-reverse"
        >
          <Grid item xs={12} lg={6}>
            <Stack
              direction={"row"}
              spacing={{ xs: 0, md: 3 }}
              alignItems={"center"}
            >
              <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                spacing={4}
                alignItems={"center"}
              >
                <SocialButton>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton>
                  <Twitter />
                </SocialButton>
                <SocialButton>
                  <Instagram />
                </SocialButton>
              </Stack>

              <Stack spacing={{xs:2,md:4}} sx={{textAlign:{xs:'center',md:'initial'}}}>
                <Typography sx={{fontSize:{xs:34,md:64}}} variant="h1" color={"white"} fontWeight={"bold"}>
                  We Provide <span style={{animation:'colorAnimation 4s linear infinite'}}>Cyber Solutions</span> For Your Security
                </Typography>
                <Typography variant="h6">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse ruam nihil molestiae.
                </Typography>
                <Stack direction={"row"}  justifyContent={{xs:'center',md:'initial'}} spacing={2}>
                  <Button variant="contained" size="large" color="secondary">
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="warning"
                    sx={{ bgcolor: DEFAULT_STYLES.darkBlue2,}}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{maxWidth:{xs:'100%',md:'90%'}}}>
              <Image
                src={banner_img}
                alt="banner_img"
                style={{ height: "auto", width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
  )
}

