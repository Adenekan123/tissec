import { StaticImageData } from "next/image";


export enum social{
    facebook='facebook',
    twitter='twitter',
    instagram='instagram'
}


export type PricingModel = {
    id:string;
    image:StaticImageData;
    position:string,
    social:social[]
}