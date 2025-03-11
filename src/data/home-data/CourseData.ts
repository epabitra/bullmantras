import { toAbsoluteUrl } from "../../helper/HelperConstants";

interface DataType {
   id: number;
   page: string;
   course_details: {
      id: number;
      thumb: string;
      tag: string;
      review: string;
      title: string;
      author?: string;
      description?: string;
      price: number;
      lesson?: string;
      minute?: string;
   }[]
};

const course_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      course_details: [
         {
            id: 1,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Regular Class",
            review: "(4.8 Reviews)",
            title: "Revision Classes",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 2,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
            tag: "Regular Class",
            review: "(4.5 Reviews)",
            title: "Super Breakout/ Trap/ Reversal Trading Setup",
            author: "Pratyush Padhy",
            price: 19,
         },
         {
            id: 3,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Revision Class",
            review: "(4.8 Reviews)",
            title: "Premium Analysis Community",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 4,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Revision Class",
            review: "(4.8 Reviews)",
            title: "Trading System Development",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 5,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Revision Class",
            review: "(4.8 Reviews)",
            title: "Trading Psychology",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 6,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Revision Class",
            review: "(4.8 Reviews)",
            title: "Checklist for day trading",
            author: "Pratyush Padhy",
            price: 15,
         }
      ]
   }
];

export default course_data;