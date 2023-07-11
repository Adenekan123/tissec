"use client";
import React, { ReactNode } from "react";
import {
  Paper,
  Container,

  Typography,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { DEFAULT_STYLES } from "@/styles/default_styles";


import forground_img from "../../assests/header-right-img.png";
import AnimatedBgImage from "./animatedBgImage";
import Nav from "../home/nav";
import SideMenu from "./sideMenu";

export const Header = ({children}:{children:ReactNode}) => {
  return (
    <Paper
      square
      sx={{
        backgroundColor: DEFAULT_STYLES.darkerBlue,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        overflow:'hidden',
        minHeight:{xs:"60vh",md:"80vh"}
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
              TISSEC
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
      <Container maxWidth={false} sx={{height:'100%'}}>
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
          <AnimatedBgImage img={forground_img} styles={{animation:'star 10s ease-out infinite'}} />
        </Box>
          {children}
      </Container>
    </Paper>
  );
};

