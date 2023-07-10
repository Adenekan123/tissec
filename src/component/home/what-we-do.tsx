"use client";
import React from "react";
import { Heading, Section } from "../shared";
import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import listimage from "../../assests/section2-list-img.png";
import whatwedo from "../../assests/section2-left-img.png";
import bg from "../../assests/section2-before-img.png";
import AnimatedBgImage from "../shared/animatedBgImage";

export const WhatWeDo = () => {
  return (
    <Section>
      <Box sx={{ position: "absolute", left: " -71%", top: "-385px" }}>
        <AnimatedBgImage
          img={bg}
          styles={{ animation: "star 10s ease-out infinite" }}
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 0, md: 8 }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }}>
            <Box
              component={Image}
              src={whatwedo}
              alt=""
              width={{ xs: 300, md: "auto" }}
              height={{ xs: 300, md: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Heading
            label="what we do"
            text="The Perfect Solution For all Protection"
            labelProps={{ mt: 4 }}
            textProps={{ mb: 3 }}
          />
          <Typography>
            Qugiat nulla pariatur excepteur sint occaecat cupidatat no proident,
            sunt in culpa rui officia deserunt.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            mt={3}
            textAlign={"left"}
            sx={{ width: { xs: "90%", md: "100%" }, mx: "auto" }}
          >
            <Stack spacing={3}>
              <Stack direction={"row"} spacing={3}>
                <Box>
                  <Image src={listimage} alt="shield" />
                </Box>
                <Stack spacing={1}>
                  <Heading
                    text="Cyber Solutions"
                    textProps={{ fontSize: "18px", mb: 0 }}
                  />
                  <Typography>
                    Ruis autem vel eum rui inea elit niau.
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={3}>
                <Box>
                  <Image src={listimage} alt="shield" />
                </Box>
                <Stack spacing={1}>
                  <Heading
                    text="Web Security"
                    textProps={{ fontSize: "18px", mb: 0 }}
                  />
                  <Typography>
                    Muis autem vel eum rui inea elit niau.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={3}>
              <Stack direction={"row"} spacing={3}>
                <Box>
                  <Image src={listimage} alt="shield" />
                </Box>
                <Stack spacing={1}>
                  <Heading
                    text="Network Security"
                    textProps={{ fontSize: "18px", mb: 0 }}
                  />
                  <Typography>
                    Guis autem vel eum rui inea elit niau.
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={3}>
                <Box>
                  <Image src={listimage} alt="shield" />
                </Box>
                <Stack spacing={1}>
                  <Heading
                    text="Locker Security"
                    textProps={{ fontSize: "18px", mb: 0 }}
                  />
                  <Typography>
                    Euis autem vel eum rui inea elit niau.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
};
