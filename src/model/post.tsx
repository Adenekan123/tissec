import { StaticImageData } from "next/image"


export enum PostTag{
    sport='sport',
    life='life',
    tech='tech',
    travel='travel'
}

export type PostModel = {
    id:string;
    thumbnail:StaticImageData;
    img:StaticImageData;
    title:string;
    date: string;
    body:string[],
    tags:string[]
}