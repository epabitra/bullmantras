import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import feature_data from "../../../data/home-data/FeatureData";
import { toAbsoluteUrl } from "../../../helper/HelperConstants";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   icon_2?: string;
   icon_3?: string;
   title: string;
   desc: string;
};

const category_data: DatatYpe[] = [
  {
        id: 1,
        page: "home_1",
        icon: toAbsoluteUrl("/assets/img/icons/features_icon01.svg"),
        title: "Learn from Scratch & Trade with Confidence",
        desc: "Learn stock market basics step by step—gain confidence and essential skills!",
     },
     {
        id: 2,
        page: "home_1",
        icon: toAbsoluteUrl("/assets/img/icons/features_icon03.svg"),
        title: "Progress monitoring and mentoring with live Q/A",
        desc: "Get expert guidance from Pratyush Ranjan Padhy—ask, interact, and grow!",
     },
     {
        id: 3,
        page: "home_1",
        icon: toAbsoluteUrl("/assets/img/icons/features_icon02.svg"),
        title: "Missed a Class? No Worries!",
        desc: "Stay on track with 400+ revision classes—catch up anytime! 🚀",
     },
     // {
     //    id: 4,
     //    page: "home_1",
     //    icon: toAbsoluteUrl("/assets/img/icons/features_icon04.svg"),
     //    title: "E-mail Marketing",
     //    desc: "Curate anding area share Pluralsight content to reach your",
     // }
];

// slider setting
const setting = {
  slidesPerView: 3,
  spaceBetween: 44,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".categories-button-next",
    prevEl: ".categories-button-prev",
  },
  breakpoints: {
    "1500": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    "768": {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

const Categories = () => {
  return (
    <section className="categories-area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="">
            <div className="section__title text-center mb-40">
              <span className="sub-title">
                Join us and take your first step toward financial independence
                today!
              </span>
              <h2 className="title">
                Unmatched Support at Every Step of Your Learning Journey
              </h2>
              <p className="desc">
                At Bull Mantra, we are on a mission to empower millions like you
                with financial freedom through our expert-led stock market
                training. Our world-class support system ensures you receive the
                guidance, mentorship, and resources needed at every stage of
                your learning journey.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="categories__wrap">
              <Swiper
                {...setting}
                modules={[Navigation]}
                className="swiper categories-active"
              >
                {category_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div key={item.id} className="">
                      <div className="features__item">
                        <div className="features__icon">
                          <img
                            src={item.icon ? item.icon : ""}
                            className="injectable"
                            alt="img"
                          />
                        </div>
                        <div className="features__content">
                          <h4 className="title text-dark">{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="categories__nav">
                <button className="categories-button-prev">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L1 7M1 7L7 1M1 7L7 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="categories-button-next">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7L15 7M15 7L9 1M15 7L9 13"
                      stroke="#161439"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
