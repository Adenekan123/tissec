"use client";
import React from "react";
import { Heading, Section } from "../shared";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import why1 from "../../assests/whychoseus-img1.png";
import why2 from "../../assests/whychoseus-img2.png";
import why3 from "../../assests/whychoseus-img3.png";
import Image from "next/image";

export const WhyChooseUs = () => {
  return (
    <Section>
      {/* <Box sx={{ position: "absolute", left: " -71%", top: "-385px" }}>
        <AnimatedBgImage
          img={bg}
          styles={{ animation: "star 10s ease-out infinite" }}
        />
      </Box> */}
      <Heading
        label="why choose us"
        text="3 Benefits of WhizCyber"
        bothProps={{ textAlign: "center" }}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{borderRadius:6}}>
            <CardContent sx={{ p: { xs: 3, md: 6 }, textAlign: "center" }}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Box component={Image} src={why1} alt="image" />
                </Box>
                <Box>
                  <Heading
                    text={"Email Protection"}
                    textProps={{ fontSize: { xs: 18, md: 24 }, mb:1 }}
                  />
                  <Typography>
                    Quis autem vel eum iure repre rui in ea voluptate velit esse
                    ua nihil molestiae.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{borderRadius:6}}>
            <CardContent sx={{ p: { xs: 3, md: 6 }, textAlign: "center" }}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Box component={Image} src={why2} alt="image" />
                </Box>
                <Box>
                  <Heading
                    text={"Bug Fixes"}
                    textProps={{ fontSize: { xs: 18, md: 24 }, mb:1 }}
                  />
                  <Typography>
                    Quis autem vel eum iure repre rui in ea voluptate velit esse
                    ua nihil molestiae.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{borderRadius:6}}>
            <CardContent sx={{ p: { xs: 3, md: 6 }, textAlign: "center" }}>
              <Stack spacing={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Box component={Image} src={why3} alt="image" />
                </Box>
                <Box>
                  <Heading
                    text={"Firewall Inspection"}
                    textProps={{ fontSize: { xs: 18, md: 24 }, mb:1 }}
                  />
                  <Typography>
                    Quis autem vel eum iure repre rui in ea voluptate velit esse
                    ua nihil molestiae.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
};
