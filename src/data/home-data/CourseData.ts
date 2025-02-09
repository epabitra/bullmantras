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
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learning Complete Stock Market",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 2,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "Learn Graphs",
            author: "Pratyush Padhy",
            price: 19,
         },
         {
            id: 3,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
            tag: "Development",
            review: "(4.8 Reviews)",
            title: "Learn Charts",
            author: "Pratyush Padhy",
            price: 15,
         },
         {
            id: 4,
            thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
            tag: "Design",
            review: "(4.5 Reviews)",
            title: "Learn Graph & Chart",
            author: "Pratyush Padhy",
            price: 19,
         },
      ]
   },
   {
      id: 2,
      page: "home_1",
      course_details: [
         // {
         //    id: 1,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
         // {
         //    id: 2,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb05.jpg"),
         //    tag: "Data Science",
         //    review: "(4.5 Reviews)",
         //    title: "Data Analysis & Visualization Masterclass",
         //    author: "David Millar",
         //    price: 27,
         // },
         // {
         //    id: 3,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb06.jpg"),
         //    tag: "Mathematic",
         //    review: "(4.7 Reviews)",
         //    title: "Master the Fundamentals of Math",
         //    author: "David Millar",
         //    price: 10,
         // },
         // {
         //    id: 4,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
         //    tag: "Development",
         //    review: "(4.8 Reviews)",
         //    title: "Learning JavaScript With Imagination",
         //    author: "David Millar",
         //    price: 15,
         // },
         // {
         //    id: 5,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
         //    tag: "Design",
         //    review: "(4.5 Reviews)",
         //    title: "The Complete Graphic Design for Beginners",
         //    author: "David Millar",
         //    price: 19,
         // },
         // {
         //    id: 6,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb03.jpg"),
         //    tag: "Marketing",
         //    review: "(4.3 Reviews)",
         //    title: "Learning Digital Marketing on Facebook",
         //    author: "David Millar",
         //    price: 24,
         // },
         // {
         //    id: 7,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
      ]
   },
   {
      id: 3,
      page: "home_1",
      course_details: [
         // {
         //    id: 1,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
         //    tag: "Development",
         //    review: "(4.8 Reviews)",
         //    title: "Learning JavaScript With Imagination",
         //    author: "David Millar",
         //    price: 15,
         // },
         // {
         //    id: 2,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
         //    tag: "Design",
         //    review: "(4.5 Reviews)",
         //    title: "The Complete Graphic Design for Beginners",
         //    author: "David Millar",
         //    price: 19,
         // },
         // {
         //    id: 3,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb03.jpg"),
         //    tag: "Marketing",
         //    review: "(4.3 Reviews)",
         //    title: "Learning Digital Marketing on Facebook",
         //    author: "David Millar",
         //    price: 24,
         // },
         // {
         //    id: 4,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
         // {
         //    id: 5,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb05.jpg"),
         //    tag: "Data Science",
         //    review: "(4.5 Reviews)",
         //    title: "Data Analysis & Visualization Masterclass",
         //    author: "David Millar",
         //    price: 27,
         // },
         // {
         //    id: 6,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb06.jpg"),
         //    tag: "Mathematic",
         //    review: "(4.7 Reviews)",
         //    title: "Master the Fundamentals of Math",
         //    author: "David Millar",
         //    price: 10,
         // },
         // {
         //    id: 7,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
      ]
   },
   {
      id: 4,
      page: "home_1",
      course_details: [
         // {
         //    id: 1,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
         // {
         //    id: 2,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb05.jpg"),
         //    tag: "Data Science",
         //    review: "(4.5 Reviews)",
         //    title: "Data Analysis & Visualization Masterclass",
         //    author: "David Millar",
         //    price: 27,
         // },
         // {
         //    id: 3,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb06.jpg"),
         //    tag: "Mathematic",
         //    review: "(4.7 Reviews)",
         //    title: "Master the Fundamentals of Math",
         //    author: "David Millar",
         //    price: 10,
         // },
         // {
         //    id: 4,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb01.jpg"),
         //    tag: "Development",
         //    review: "(4.8 Reviews)",
         //    title: "Learning JavaScript With Imagination",
         //    author: "David Millar",
         //    price: 15,
         // },
         // {
         //    id: 5,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb02.jpg"),
         //    tag: "Design",
         //    review: "(4.5 Reviews)",
         //    title: "The Complete Graphic Design for Beginners",
         //    author: "David Millar",
         //    price: 19,
         // },
         // {
         //    id: 6,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb03.jpg"),
         //    tag: "Marketing",
         //    review: "(4.3 Reviews)",
         //    title: "Learning Digital Marketing on Facebook",
         //    author: "David Millar",
         //    price: 24,
         // },
         // {
         //    id: 7,
         //    thumb: toAbsoluteUrl("/assets/img/courses/course_thumb04.jpg"),
         //    tag: "Business",
         //    review: "(4.8 Reviews)",
         //    title: "Financial Analyst Training & Investing Course",
         //    author: "David Millar",
         //    price: 12,
         // },
      ]
   },
];

export default course_data;