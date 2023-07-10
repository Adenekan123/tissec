"use client";
import React from "react";
import { Section } from "./section";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SocialButton } from "./socialButton";
import { FaFacebookF } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { Call, GpsFixed, Instagram, Mail, Twitter } from "@mui/icons-material";
import { Heading } from "./Heading";
import { DEFAULT_STYLES } from "@/styles/default_styles";

export const Footer = () => {
  return (
    <Box>
      <Section bg="#171D34">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Typography variant="h4" color={"white"}>
                Logo
              </Typography>
              <Typography>
                Deleniti aeue corrupti quos dolores et quas molestias excepturi
                sint occaecati rupiditate non provident, similique sunt...
              </Typography>
              <Stack direction={"row"} spacing={3}>
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
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Heading
              text={"About Us"}
              textProps={{ fontSize: "18px", mb: 3 }}
            />
            <List component={"ul"}>
              <ListItemButton disableGutters>
                <ListItemIcon color="secondary.main">
                  <RxDotFilled size={24} />
                </ListItemIcon>
                Services
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon color="secondary.main">
                  <RxDotFilled size={24} />
                </ListItemIcon>
                Pricing
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon color="secondary.main">
                  <RxDotFilled size={24} />
                </ListItemIcon>
                About Us
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon color="secondary.main">
                  <RxDotFilled size={24} />
                </ListItemIcon>
                Our Teams
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon color="secondary.main">
                  <RxDotFilled size={24} />
                </ListItemIcon>
                ontact Us
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Heading
              text={"Contact Info"}
              textProps={{ fontSize: "18px", mb: 3 }}
            />
            <List component={"ul"}>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <Call color="warning" fontSize="small" />
                </ListItemIcon>
                +61 3 8376 6284
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <Mail color="warning" fontSize="small" />
                </ListItemIcon>
                Info@whizcyber.om
              </ListItemButton>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <GpsFixed color="warning" fontSize="small" />
                </ListItemIcon>
                21 King Street Melbourne,3000, Australia
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              <Heading
                text={"Sign up for Newsletter"}
                textProps={{ fontSize: "18px" }}
              />
              <TextField
                variant="filled"
                sx={{ bgcolor: "#1D233C", borderRadius: 3 }}
                fullWidth
                size="medium"
                placeholder="Email Address"
                color="secondary"
              />
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                color="warning"
                size="large"
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Section>
      <Stack alignItems={'center'} sx={{backgroundColor:'#171D34',py:2,borderTop:`1px solid ${DEFAULT_STYLES.softBlue}`}}>
        <Typography fontSize={'16px'}>Tissec copyright © 2022. All Rights Reserved.</Typography>
      </Stack>
    </Box>
  );
};
