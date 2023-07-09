"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Heading, Section } from "../shared";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

import { servicesArr } from "@/store/data";
import { ServicesModel } from "@/model";
import { DEFAULT_STYLES } from "@/styles/default_styles";
export const Services = () => {
  const [services, setServices] = useState<ServicesModel[]>([]);

  useEffect(() => {
    setServices(servicesArr);
  }, []);
  return (
    <Section>
      <Heading
        label="our services"
        text="Cyber Security Solutions"
        bothProps={{ textAlign: "center" }}
      />
      <Box>
        <Splide
          aria-label="My Favorite Images"
          options={{
            autoplay:true,
            arrows:false,
            perPage: 3,
            perMove: 1,
            gap: 24,
            breakpoints: {
              1200: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
        >
          {services.map((service) => {
            const { id, img, title, body } = service;
            return (
              <SplideSlide key={id}>
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
              </SplideSlide>
            );
          })}

          {/* );
    })} */}
        </Splide>
      </Box>
    </Section>
  );
};

