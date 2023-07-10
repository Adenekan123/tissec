import { PricingModel, PricingPlan } from "@/model/pricing";
import { nanoid } from "nanoid";

import pricing1 from "../../assests/pricing-plan-icon1.png";
import pricing2 from "../../assests/pricing-plan-icon2.png";
import pricing3 from "../../assests/pricing-plan-icon3.png";

export const pricinglist: PricingModel[] = [
  {
    id: nanoid(12),
    image: pricing1,
    plan: PricingPlan["beginner"],
    price: 120,
    priviledges: [
      "10 Days Product Testing",
      "Upgrade Anytime Protection",
      "100 Malware Removal",
      "Scan Every 08 Hrs",
    ],
  },
  {
    id: nanoid(12),
    image: pricing2,
    plan: PricingPlan['bussiness'],
    price: 180,
    priviledges: [
      "40 Days Product Testing",
      "Upgrade Anytime Protection",
      "100 Malware Removal",
      "24/7 Live Assistance",
    ],
  },
  {
    id: nanoid(12),
    image: pricing3,
    plan: PricingPlan['professional'],
    price: 200,
    priviledges: [
      "40 Days Product Testing",
      "Upgrade Anytime Protection",
      "100 Malware Removal",
      "24/7 Live Assistance",
    ],
  },
];
