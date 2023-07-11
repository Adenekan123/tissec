"use client"
import { SinglePost } from '@/component/blog'
import { PostModel } from '@/model'
import { postArr } from '@/store/data'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Page = ({params}:{params:{id:string}}) => {
  const [post,setPost] = useState<PostModel | null>(null);

  useEffect(()=>{
    if(params && params.id){
      console.log(params.id)
      const findPost = postArr.find(post=> post.id === params.id);
      console.log(findPost,postArr)
      if(findPost) setPost(findPost)
    }
  },[params,post])
  return (
    post ? <SinglePost post={post}/> : <Box sx={{p:3}}><Typography sx={{position:'relative',zIndex:2,textAlign:'center'}}>Post Details Not Found</Typography></Box>
  )
}

export default Page