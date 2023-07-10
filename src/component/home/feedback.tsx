"use client";

import React from "react";
import { Heading, Section } from "../shared";
import { Box, Button, FormControl, Grid, TextField } from "@mui/material";

export const Feedback = () => {
  return (
    <Section>
      <Heading
        label="get started now"
        text="Send us a Message"
        bothProps={{ textAlign: "center" }}
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth sx={{currentColor:'white'}}>
            <TextField
              fullWidth
              name="name"
              placeholder="Name"
              variant="filled"
              color="secondary"
              sx={{ color: "white!important"}}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            name="phone"
            placeholder="Phone"
            variant="filled"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            type="email"
            name="email"
            placeholder="Email"
            variant="filled"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="message"
            placeholder="Message"
            variant="filled"
            minRows={4}
            multiline
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" color="secondary" size="large">
              Submit Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};
