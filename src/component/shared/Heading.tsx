"use client"
import { Box, SxProps, Typography, TypographyStyle } from "@mui/material";
import React from "react";

export type HeadingModel = {
  label?: string;
  labelProps?: SxProps;
  text: string | number;
  textProps?: SxProps;
  bothProps?:SxProps;
}
export const Heading = ({
  label,
  text,
  textProps={},
  labelProps={},
  bothProps={}
}: HeadingModel) => {
  return (
    <Box sx={bothProps}>
      {label ? (
        <Typography letterSpacing={3} fontSize={{xs:14,md:16}} color={"secondary.main"} sx={{...labelProps}} mb={1} textTransform={'uppercase'}>
          {label}
        </Typography>
      ) : (
        ""
      )}
      <Typography variant="h3" fontSize={{xs:24,md:46}}  color={"white"}  sx={{...textProps}} fontWeight={'bolder'} mb={6}>
        {text}
      </Typography>
    </Box>
  );
};
