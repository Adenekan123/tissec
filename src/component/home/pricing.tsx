"use client";
import { Heading, Section } from "@/component/shared";
import { pricinglist } from "@/store/data";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";

export const Pricing = () => {
  return (
    <Section>
      <Heading
        label="we offer"
        text="Our Flexible Pricing Plans"
        bothProps={{ textAlign: "center" }}
      />
      <Grid container spacing={3} rowSpacing={{xs:6,md:3}}>
        {pricinglist.map((pricing) => {
          const { id, image, plan, price, priviledges } = pricing;
          return (
            <Grid item key={id} xs={12} sm={6} lg={4}>
              <Card sx={{overflow:'initial'}}>
                <CardContent sx={{ p: { xs: 3, md: 6 },position:'relative',top:{xs:-34,md:-62},textAlign:'center' }}>
                  <Stack spacing={4} sx={{textAlign:'center'}}>
                    <Box>
                      <Button variant="contained" color="warning" size="small" sx={{minWidth:150}}>
                        {plan}
                      </Button>
                    </Box>

                    <Box>
                      <Box component={Image} src={image} alt="secure" />
                    </Box>
                    <Box>
                      <Heading textProps={{ mb: 1,fontWeight:'bolder' }} text={`$${price}`} />
                      <Typography>/ Per Month</Typography>
                    </Box>
                  </Stack>
                  <List sx={{width:{xs:'60%',md:'90%'},mx:'auto'}}>
                    {priviledges.map((priviledge) => (
                      <ListItem key={nanoid(3)}>
                        <ListItemIcon>
                          <CheckCircle />
                        </ListItemIcon>
                        {priviledge}
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="outlined" sx={{ borderColor: "#fff",mt:3 }}>
                    Prchase Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};
