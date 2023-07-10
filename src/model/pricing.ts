import { StaticImageData } from "next/image";

export enum PricingPlan{
    beginner='beginner',
    bussiness='bussiness',
    professional='professional'
}


export type PricingModel = {
    id:string;
    plan:PricingPlan;
    price:number;
    image:StaticImageData;
    priviledges:string[]
}