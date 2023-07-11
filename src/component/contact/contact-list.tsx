"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import contact_img1 from "../../assests/contact-page-img1.png";
import contact_img2 from "../../assests/contact-page-img2.png";
import contact_img3 from "../../assests/contact-page-img3.png";
import { Heading, Section } from "../shared";

export const ContactList = () => {
  return (
    <Section>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center", py:6 }}>
              <Box>
                <Box component={Image} src={contact_img1} alt="phone" />
              </Box>
              <Box>
                <Heading text={"Phone:"} textProps={{ mb: 2, fontSize:24 }} />
                <Typography>+234 6789 543 347</Typography>
                <Typography>+234 6789 543 347</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center", py:6 }}>
              <Box>
                <Box component={Image} src={contact_img2} alt="phone" />
              </Box>
              <Box>
                <Heading text={"Email:"} textProps={{ mb: 2,fontSize:24 }} />
                <Typography>info@test.gmail.com</Typography>
                <Typography>info@test.yahoo.com</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center", py:6 }}>
              <Box>
                <Box component={Image} src={contact_img3} alt="phone" />
              </Box>
              <Box>
                <Heading text={"Location:"} textProps={{ mb: 2,fontSize:24 }} />
                <Typography>
                  121 King Street, Melbourne Victoria 3000 Australia
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
};
