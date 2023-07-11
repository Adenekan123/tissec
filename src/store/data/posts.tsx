import { PostModel, PostTag } from "@/model";
import { nanoid } from "nanoid";
import img1 from "../../assests/standard_post_img01.jpg";
import img2 from "../../assests/standard_post_img03.jpg";
import img3 from "../../assests/standard_post_img06.jpg";
import preview_img from "../../assests/post-featured-img1.jpg";

export const postArr: PostModel[] = [
  {
    id: "ActtBUKNS4cw",
    title: "Standard post with a single image",
    date: "Jan 21, 2017",
    thumbnail: img1,
    img:preview_img,
    tags: [PostTag["life"], PostTag["tech"]],
    body: [
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.",
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet. Ut nec metus a mi ullamcorper hendrerit. Nulla facilisi. Pellentesque sed nibh a quam accumsan dignissim quis quis urna. The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus.M",
      "The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus. Suspendisse vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus vel scelerisque id, iaculis eu nibh."
    ],
  },
  {
    id: "FUJTxej4NxGA",
    title: "Simplicity, a post with slider gallery",
    date: "Jan 21, 2017",
    thumbnail: img2,
    img:preview_img,
    tags: [PostTag["life"], PostTag["tech"]],
    body: [
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.",
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet. Ut nec metus a mi ullamcorper hendrerit. Nulla facilisi. Pellentesque sed nibh a quam accumsan dignissim quis quis urna. The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus.M",
      "The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus. Suspendisse vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus vel scelerisque id, iaculis eu nibh."
    ],
  },
  {
    id: "NLAl38QszURt",
    title: "Simplicity, a post with slider gallery",
    date: "Jan 21, 2017",
    thumbnail: img3,
    img:preview_img,
    tags: [PostTag["life"], PostTag["tech"]],
    body: [
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat.",
      "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet. Ut nec metus a mi ullamcorper hendrerit. Nulla facilisi. Pellentesque sed nibh a quam accumsan dignissim quis quis urna. The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus.M",
      "The most happiest time of the day!. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse ultricies ultrices viverra. Morbi rhoncus laoreet tincidunt. Mauris interdum convallis metus. Suspendisse vel lacus est, sit amet tincidunt erat. Etiam purus sem, euismod eu vulputate eget, porta quis sapien. Donec tellus est, rhoncus vel scelerisque id, iaculis eu nibh."
    ],
  },
];
