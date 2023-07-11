"use client";
import {
  Box,

} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Heading, Section } from "../shared";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { servicesArr } from "@/store/data";
import { ServicesModel } from "@/model";
import { ServiceCard } from "../services";
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
            autoplay: true,
            arrows: false,
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
            return (
              <SplideSlide key={service.id}>
                <ServiceCard service={service} />
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
