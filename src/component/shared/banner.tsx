"use client"

import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { BreadCrumb } from './breadCrumb'

export const Banner = ({name,description}:{name:string;description:string}) => {
  return (
    <Grid
    container
    justifyContent={"center"}
    alignItems={"center"}
    sx={{ minHeight: "80vh", position: "relative", zIndex: 1 }}
  >
    <Grid item xs={12} md={8} lg={5}>
      <Stack
        spacing={2}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: 34, md: 64 } }}
          variant="h1"
          color={"white"}
          fontWeight={"bold"}
        >
          <span
            style={{ animation: "colorAnimation 4s linear infinite" }}
          >
            {name}
          </span>{" "}
        </Typography>
        <Typography variant="h6">
          {description}
        </Typography>
       <BreadCrumb/>
      </Stack>
    </Grid>
  </Grid>
  )
}

