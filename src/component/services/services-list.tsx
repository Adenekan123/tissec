"use client"
import React from "react";
import { Heading, Section } from "../shared";
import { Grid } from "@mui/material";
import { servicesArr } from "@/store/data";
import { ServiceCard } from "./service-card";

export const ServicesList = () => {
  return (
    <Section>
      <Heading
        label="our services"
        text="Cyber Security Solutions"
        bothProps={{ textAlign: "center" }}
      />
      <Grid container spacing={3}>
        {servicesArr.map((service) => (
          <Grid item xs={12} sm={6} lg={4} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

