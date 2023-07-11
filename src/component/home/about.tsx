"use client";
import React from "react";
import { Heading, Section } from "../shared";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import about_img1 from "../../assests/about-section-img1.png";
import about_img2 from "../../assests/about-section-img2.png";
import about_img3 from "../../assests/about-section-img3.png";
import bg from "../../assests/about-left-background.png";
import { CheckCircle } from "@mui/icons-material";
import AnimatedBgImage from "../shared/animatedBgImage";

export const About = () => {
  return (
    <Section>
      <Box sx={{ position: "absolute", left: " -71%", top: "-385px" }}>
        <AnimatedBgImage
          img={bg}
          styles={{ animation: "star 10s ease-out infinite" }}
        />
      </Box>
      <Grid container spacing={{xs:3,md:8}} sx={{position:'relative',zIndex:1}}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "80%", mx: "auto" }}>
            <Stack
              direction={"row"}
              gap={3}
              sx={{ height: { xs: "200px", lg: "auto" } }}
            >
              <Box sx={{ flex: "90%", borderRadius: 8, overflow: "hidden" }}>
                <Box
                  component={Image}
                  src={about_img1}
                  alt="tech"
                  width={"100%"}
                  sx={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ flex: 1, alignSelf: "end" }}>
                <Box component={Image} src={about_img2} alt="tech2" />
              </Box>
            </Stack>
            <Box textAlign={"right"} mt={2}>
              <Box
                component={Image}
                src={about_img3}
                alt="tech3"
                width={{xs:'100%',md:'80%'}}
                height={{xs:200,md:'auto'}}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Heading
              label="about us"
              text="24/7 Cyber Security Operation Center"
              labelProps={{ mt: {sx:4,md:4}, }}
              textProps={{mb:{xs:2,md:3}}}
            />
            <Typography>
              Duis aute irure dolor in reprehenderit in voluptate esse cillu
              dolore eu fugiat nulla pariatur excepteur sint occaecat cupia at
              non proident, sunt in culpa rui officia deserunt mollit ani mid
              est laborum incidunt aut labore magnam.
            </Typography>
            <Stack direction={"row"} spacing={{xs:0,md:4}} sx={{flexWrap:'wrap'}}>
              <List sx={{ color: "inherit", textAlign: "inherit" }}>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ width: 24, height: 24 }} />
                  </ListItemIcon>
                  Malware Detection Removal
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  Content Delivery Network
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  Security Management
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  SIEM Threat Detection
                </ListItem>
              </List>
              <List sx={{ color: "inherit", textAlign: "inherit" }}>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ width: 24, height: 24 }} />
                  </ListItemIcon>
                  Cloud Security
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  Cyber Security
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  Identifying Threats
                </ListItem>
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon color="tertiary">
                    <CheckCircle sx={{ height: 24 }} />
                  </ListItemIcon>
                  Server Security
                </ListItem>
              </List>
            </Stack>
            <Box mt={4}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ px: 4, py: 2 }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};
