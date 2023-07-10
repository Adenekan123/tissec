"use client";

import React from "react";
import { Heading, Section } from "../shared";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import team1 from "../../assests/teams-img1.png";
import team2 from "../../assests/teams-img2.png";
import team3 from "../../assests/teams-img3.png";
import team4 from "../../assests/teams-img4.png";
import Image from "next/image";
import { DEFAULT_STYLES } from "@/styles/default_styles";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AnimatedBgImage from "../shared/animatedBgImage";

import forground_img from '../../assests/who-we-right.png'

export const Teams = () => {
  return (
    <Section>
        <Box
          sx={{
            display: {xs:'none',md:'block'},
            m: "0 0 1rem",
            position: "absolute",
            width: '100%',
            height: 1262,
            bottom: 88,
            right: -500,
          }}
        >
          <AnimatedBgImage img={forground_img} styles={{animation:'star 10s ease-out infinite'}} />
        </Box>
      <Grid container spacing={8} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <Stack spacing={4}>
            <Heading
              text={"Expert Team Who are Behind the Security"}
              label="our team"
              textProps={{ mb: 0 }}
            />
            <Stack spacing={2}>
              <Typography>
                Fugiat nulla pariatur excepteur sint occaecat cupidatat non
                proident, sunt in culpa rui officia deserunt mollit anim id est
                laborum incidunt ut labore et dolore magnam.
              </Typography>
              <Typography>
                Molestiae non recusandae itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis.
              </Typography>
            </Stack>
            <Box>
              <Button size="large" color="secondary" variant="contained">
                Join Our Team
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container columnSpacing={4} rowSpacing={{xs:4,md:1}}>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "transparent" }} elevation={0}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component={Image}
                    src={team1}
                    alt="team"
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                  <Stack
                    spacing={1}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ position: "absolute", bottom: -6, width: "100%" }}
                  >
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaFacebookF size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaTwitter size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaInstagram size={18} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>

                <CardContent
                  sx={{
                    textAlign: "center",

                    position: "relative",
                  }}
                >
                  <Typography color={"white"} variant="h6">
                    Morgan Cooper
                  </Typography>
                  <Typography fontSize={15}>CEO & FOUNDER</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "transparent" }} elevation={0}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component={Image}
                    src={team2}
                    alt="team"
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                  <Stack
                    spacing={1}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ position: "absolute", bottom: -6, width: "100%" }}
                  >
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaFacebookF size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaTwitter size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaInstagram size={18} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>

                <CardContent
                  sx={{
                    textAlign: "center",

                    position: "relative",
                  }}
                >
                  <Typography color={"white"} variant="h6">
                    Amanda Brown
                  </Typography>
                  <Typography fontSize={15}>SECURITY HEAD</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "transparent" }} elevation={0}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component={Image}
                    src={team3}
                    alt="team"
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />
                  <Stack
                    spacing={1}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ position: "absolute", bottom: -6, width: "100%" }}
                  >
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaFacebookF size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaTwitter size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaInstagram size={18} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>

                <CardContent
                  sx={{
                    textAlign: "center",

                    position: "relative",
                  }}
                >
                  <Typography color={"white"} variant="h6">
                    Duglas Rovland
                  </Typography>
                  <Typography fontSize={15}>CYBER ANALYST</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "transparent" }} elevation={0}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component={Image}
                    src={team4}
                    alt="team"
                    sx={{
                      height: 250,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 5,
                    }}
                  />

                  <Stack
                    spacing={1}
                    direction={"row"}
                    justifyContent={"center"}
                    sx={{ position: "absolute", bottom: -6, width: "100%" }}
                  >
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaFacebookF size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaTwitter size={18} />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        color="secondary"
                        sx={{
                          bgcolor: DEFAULT_STYLES.secondary,
                          color: "white",
                        }}
                      >
                        <FaInstagram size={18} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
                <CardContent
                  sx={{
                    textAlign: "center",

                    position: "relative",
                  }}
                >
                  <Typography color={"white"} variant="h6">
                    Christin Jonson
                  </Typography>
                  <Typography fontSize={15}>ETHICAL HACKER</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
