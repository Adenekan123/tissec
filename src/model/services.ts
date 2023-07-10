import { StaticImageData } from "next/image"



export type ServicesModel = {
    id:string;
    img:StaticImageData;
    title:string;
    body:string[];
}