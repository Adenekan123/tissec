"use client";
import React from "react";
import {
  Paper,
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { DEFAULT_STYLES } from "@/styles/default_styles";
import { Twitter, Instagram } from "@mui/icons-material";

import banner_img from "../../assests/whiz-cyber-banner.png";
import Image from "next/image";
import { SocialButton } from "../shared";
import AnimatedBgImage from "../shared/animatedBgImage";
import Nav from "./nav";
import SideMenu from "../shared/sideMenu";

const Header = () => {
  return (
    <Paper
      square
      sx={{
        backgroundColor: DEFAULT_STYLES.darkerBlue,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        overflow:'hidden'
      }}
    >
      <Container maxWidth={false}>
        <AppBar
          elevation={0}
          color="transparent"
          sx={{ px: { xs: 2, md: 10 }, py: 2 }}
        >
          <Toolbar sx={{ justifyContent: "space-between", p: 0 }}>
            <Typography variant="h4" color={"white"}>
              Logo
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Nav navProps={{ direction: "row", spacing: 6 }} />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <SideMenu>
                <Nav
                  navProps={{
                    spacing: 3,
                    width: "50vw",
                    height: "100%",
                    py: 6,
                    bgcolor: DEFAULT_STYLES.darkBlue,
                  }}
                />
              </SideMenu>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
      <Container maxWidth={false}>
        <Box
          sx={{
            display: {xs:'none',md:'block'},
            m: "0 0 1rem",
            position: "absolute",
            width: '100%',
            height: 1262,
            bottom: 88,
            right: -500,
            transform:'scale(1.4)'
          }}
        >
          <AnimatedBgImage />
        </Box>
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
      </Container>
    </Paper>
  );
};

export default Header;
