"use client"
import { PostModel } from "@/model";
import { ArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const PostCard = ({ post }: { post: PostModel }) => {
  const {id,thumbnail, title, date, body,tags } = post;
  return (
    <Card variant="outlined" color="secondary" sx={{position:'relative',borderColor:"secondary.main"}}>
      <Box
        component={Image}
        src={thumbnail}
        alt={title}
        height={180}
        sx={{ objectFit: "cover" }}
      />
      <Box sx={{position:'absolute',top:5,right:5}}>
        <Button disableElevation variant="contained" color="secondary" size="small" sx={{borderRadius:20}}>{tags[0]}</Button>
      </Box>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="caption" color={"secondary.main"}>
              {date}
            </Typography>
            <Typography variant="h6" sx={{ color: "white" }}>
              {title}
            </Typography>
          </Box>

          <Typography sx={{fontSize:15}}>{body[0]}</Typography>
          <Box>
            <Button disableElevation color="secondary" variant="text" endIcon={<ArrowRight />} href={`blog/${post.id}`}>
              Read More
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PostCard;
