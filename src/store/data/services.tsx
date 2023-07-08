import { ServicesModel } from "@/model";
import { nanoid } from "nanoid";

import img1 from "../../assests/services-img1.png";
import img2 from "../../assests/services-img2.png";
import img3 from "../../assests/services-img3.png";
import img4 from "../../assests/services-img5.png";

export const servicesArr: ServicesModel[] = [
  {
    id: nanoid(6),
    title: "comuter security",
    body: [
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde sit consequuntur libero quisquam adipisci eum saepe,nobis",
    ],
    img: img1,
  },
  {
    id: nanoid(6),
    title: "folder security",
    body: [
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde sit consequuntur libero quisquam adipisci eum saepe,nobis",
    ],
    img: img2,
  },
  {
    id: nanoid(6),
    title: "finger print security",
    body: [
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde sit consequuntur libero quisquam adipisci eum saepe,nobis",
    ],
    img: img3,
  },
  {
    id: nanoid(6),
    title: "finger print security",
    body: [
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde sit consequuntur libero quisquam adipisci eum saepe,nobis",
    ],
    img: img4,
  },
  {
    id: nanoid(6),
    title: "finger print security",
    body: [
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde sit consequuntur libero quisquam adipisci eum saepe,nobis",
    ],
    img: img2,
  },
];
