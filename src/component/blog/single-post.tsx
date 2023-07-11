"use client";
import React from "react";
import { Section } from "../shared";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { PostModel } from "@/model";
import { nanoid } from "nanoid";

export const SinglePost = ({ post }: { post: PostModel }) => {
  const { img, title, date, body, tags } = post;

  return (
    <Section>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12} md={9}>
          <Box>
            <Box
              component={Image}
              src={img}
              alt="title"
              height={300}
              width={'100%'}
              sx={{ objectFit: "cover" }}
            />
            <Box sx={{ my: 2 }}>
              <Typography variant="caption" color={"secondary.main"}>
                {date}
              </Typography>
              <Typography variant="h6" sx={{ color: "white" }}>
                {title}
              </Typography>
              <Stack spacing={2} sx={{mt:2}}>
                {body.map((p) => (
                  <Typography key={nanoid(6)} sx={{ fontSize: 15 }}>
                    {p}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Stack direction={"row"} spacing={1}>
              {tags.map((tag) => (
                <Box key={nanoid(6)}>
                  <Button
                    size="small"
                    variant="contained"
                    color="warning"
                  >{tag}</Button>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

