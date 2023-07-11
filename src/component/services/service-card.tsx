"use client"
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Heading } from "../shared";
import { DEFAULT_STYLES } from "@/styles/default_styles";
import { ServicesModel } from "@/model";


export const ServiceCard = ({service}: {service:ServicesModel}) => {
    const {img, title, body } = service;
  return (
    <Card sx={{ textAlign: "center" }}>
      <CardContent sx={{ p: { base: 3, md: 6 } }}>
        <Stack spacing={4}>
          <Box textAlign={"center"}>
            <Box component={Image} src={img} alt={title} />
          </Box>
          <Box>
            <Heading
              text={title}
              textProps={{
                fontSize: "24px",
                textTransform: "capitalize",
                mb: 1,
              }}
            />
            <Typography>{body[0]}</Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{ mt: 3, borderColor: DEFAULT_STYLES.softBlue }}
              
            >
              Read more
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

