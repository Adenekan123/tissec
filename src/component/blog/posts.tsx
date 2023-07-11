"use client"
import React from "react";
import { Section } from "../shared";
import { Grid } from "@mui/material";
import { postArr } from "@/store/data";
import PostCard from "./post-card";

const Posts = () => {
  return (
    <Section>
      <Grid container spacing={3}>
        {postArr.map((post) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Posts;
