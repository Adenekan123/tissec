"use client";
import React from "react";
import { Heading, Section } from "../shared";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import whoweare from "../../assests/who-we-are-img.png";

export const WhoWeAre = () => {
  return (
    <Section>
      <Grid container textAlign={{xs:'center',md:'left'}} justifyContent={'space-between'}>
        <Grid item xs={12} md={6}>
          <Heading
            label="who we are"
            text="We Spend 30,000 Hours Per Year to Virus Threats"
            labelProps={{ mt: 4 }}
            textProps={{ mb: 3 }}
          />
          <Typography>
            Fugiat nulla pariatur excepteur sint occaecat cupidatat non
            proident, sunt in culpa rui officia deserunt mollit anim id est
            laborum incidunt ut labore et dolore magnam.
          </Typography>

          <Stack direction={"row"} spacing={4} mt={3}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={"bolder"}
                color={"warning.main"}
              >
                2K<sup>+</sup>
              </Typography>
              <Typography>Engagements</Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight={"bolder"}
                color={"warning.main"}
              >
                17M<sup>+</sup>
              </Typography>
              <Typography>Monitored Globally</Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight={"bolder"}
                color={"warning.main"}
              >
                18K<sup>+</sup>
              </Typography>
              <Typography>Network Sensors</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} order={{xs:-1,md:'initial'}}>
          <Box sx={{position:'relative',top:{xs:0,md:-54}}}>
            <Box component={Image} src={whoweare} alt="" width={{xs:'70%',md:'90%'}} height={{xs:350,md:'auto'}} />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};
