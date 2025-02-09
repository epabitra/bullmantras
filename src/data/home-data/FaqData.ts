interface DataType {
   id: number;
   page: string;
   question: string;
   answer: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      question: "What Does BullMantra Offer You?",
      answer: "We provide in-depth trading courses designed to enhance your financial knowledge, sharpen your skills, and help you succeed in the markets. Whether you're a beginner or an advanced trader, our tailored programs will guide you toward your goals.",
      showAnswer:false,
   },
   {
      id: 2,
      page: "home_1",
      question: "Why Choose BullMantra for Your Education?",
      answer: "Learn from industry professionals, access structured courses, gain hands-on experience, and join a supportive trading community.",
      showAnswer:false,
   },
   {
      id: 3,
      page: "home_1",
      question: "How Do We Provide Our Services?",
      answer: "We offer video lectures, live trading simulations, one-on-one mentorship, interactive sessions, and regular market insights.",
      showAnswer:false,
   },
   {
      id: 4,
      page: "home_1",
      question: "Are BullMantra Courses Affordable?",
      answer: "Yes! Our courses are competitively priced with flexible payment options to make trading education accessible to everyone.",
      showAnswer:false,
   },
];

export default faq_data;