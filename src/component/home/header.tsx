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
  MenuItem,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { DEFAULT_STYLES } from "@/styles/default_styles";
import { Twitter, Instagram } from "@mui/icons-material";

import banner_img from "../../assests/whiz-cyber-banner.png";
import Image from "next/image";
import { SocialButton } from "../shared";
import AnimatedBgImage from "../shared/animatedBgImage";

const Header = () => {
  return (
    <Paper
      square
      sx={{
        backgroundColor: DEFAULT_STYLES.darkerBlue,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
    >
      <Container maxWidth={false} sx={{ padding: "0 80px!important" }}>
        <AppBar elevation={0} color="transparent" sx={{ px: 8, py: 2 }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4" color={"white"}>
              Logo
            </Typography>
            <Stack direction={"row"} spacing={6}>
              <Button
                size="large"
                sx={{ color: "white", fontWeight: 600 }}
                variant="text"
              >
                Home
              </Button>
              <Button
                size="large"
                sx={{ color: "white", fontWeight: 600 }}
                variant="text"
              >
                About Us
              </Button>
              <Button
                size="large"
                sx={{ color: "white", fontWeight: 600 }}
                variant="text"
              >
                Services
              </Button>
              <Button
                size="large"
                sx={{ color: "white", fontWeight: 600 }}
                variant="text"
              >
                Blog
              </Button>
              <Button
                color="warning"
                sx={{ color: "white", fontWeight: 600 }}
                variant="contained"
              >
                Contact us
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
      <Container maxWidth={false} sx={{ padding: "0 80px!important" }}>
        <Box
          sx={{
            display: "block",
            m: "0 0 1rem",
            position: "absolute",
            width: 1689,
            height: 1262,
            bottom: 98,
            right: -733,
          }}
        >
          <AnimatedBgImage />
        </Box>
        <Grid
          container
          sx={{ py: 14, position: "relative" }}
          spacing={4}
          alignItems={"center"}
        >
          <Grid item xs={12} lg={6}>
            <Stack direction={"row"} spacing={4} alignItems={"center"}>
              <Stack spacing={4} alignItems={"center"}>
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

              <Stack spacing={3}>
                <Typography variant="h1" color={"white"} fontWeight={"bold"}>
                  We Provide Cyber Solutions For Your Security
                </Typography>
                <Typography variant="h6">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse ruam nihil molestiae.
                </Typography>
                <Box>
                  <Button variant="contained" size="large" color="secondary">
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="warning"
                    sx={{ bgcolor: DEFAULT_STYLES.darkBlue2, ml: 2 }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <Image src={banner_img} alt="banner_img" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Header;
