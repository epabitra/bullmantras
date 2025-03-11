import { toAbsoluteUrl } from "../../helper/HelperConstants";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   icon_2?: string;
   icon_3?: string;
   title: string;
   desc: string;
};

const feature_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: toAbsoluteUrl("/assets/img/icons/features_icon01.svg"),
      title: "Learn from Scratch & Trade with Confidence",
      desc: "Whether you're a complete beginner or looking to strengthen your foundation, our stock market courses are designed to guide you step by step. We simplify complex concepts, ensuring you gain the confidence and skills needed to navigate the markets successfully.",
   },
   {
      id: 2,
      page: "home_1",
      icon: toAbsoluteUrl("/assets/img/icons/features_icon03.svg"),
      title: "Progress monitoring and mentoring with live Q/A",
      desc: "Ask questions, get expert guidance, and interact directly with Pratyush Ranjan Padhy. We're here to support you at every step of your trading journey!",
   },
   {
      id: 3,
      page: "home_1",
      icon: toAbsoluteUrl("/assets/img/icons/features_icon02.svg"),
      title: "Missed a Class? No Worries!",
      desc: "Stay on track with 400+ revision classes—catch up anytime and never miss a learning opportunity! 🚀",
   },
   // {
   //    id: 4,
   //    page: "home_1",
   //    icon: toAbsoluteUrl("/assets/img/icons/features_icon04.svg"),
   //    title: "E-mail Marketing",
   //    desc: "Curate anding area share Pluralsight content to reach your",
   // }
];

export default feature_data;