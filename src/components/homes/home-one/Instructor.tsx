import { Link } from "react-router-dom";
import BtnArrow from "../../../svg/BtnArrow";
import { toAbsoluteUrl } from "../../../helper/HelperConstants";

interface DataType {
   id: number;
   thumb: string
   title: string;
   designation: string;
   rating: string;
};

const instructor_data: DataType[] = [
   {
      id: 1,
      thumb: toAbsoluteUrl("/assets/img/instructor/instructor01.png"),
      title: "Mark Jukarberg",
      designation: "UX Design Lead",
      rating: "(4.8 Ratings)"
   },
   {
      id: 2,
      thumb: toAbsoluteUrl("/assets/img/instructor/instructor02.png"),
      title: "Web Design",
      designation: "Olivia Mia",
      rating: "(4.8 Ratings)"
   },
   {
      id: 3,
      thumb: toAbsoluteUrl("/assets/img/instructor/instructor03.png"),
      title: "William Hope",
      designation: "Digital Marketing",
      rating: "(4.8 Ratings)"
   },
   {
      id: 4,
      thumb: toAbsoluteUrl("/assets/img/instructor/instructor04.png"),
      title: "Sophia Ava",
      designation: "Web Development",
      rating: "(4.8 Ratings)"
   },
];

const Instructor = () => {
   return (
      <section className="instructor__area">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="instructor__content-wrap">
                     <div className="section__title mb-15">
                        <span className="sub-title">Skilled Introduce</span>
                        <h2 className="title">Our Top Class & Expert Instructors in One Place</h2>
                     </div>
                     <p>when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries</p>
                     <div className="tg-button-wrap">
                        <Link to={toAbsoluteUrl("/instructors")} className="btn arrow-btn">See All Instructors<BtnArrow /></Link>
                     </div>
                  </div>
               </div>

               <div className="col-xl-8">
                  <div className="instructor__item-wrap">
                     <div className="row">
                        {instructor_data.map((item) => (
                           <div key={item.id} className="col-sm-6">
                              <div className="instructor__item">
                                 <div className="instructor__thumb">
                                    <Link to={toAbsoluteUrl("/instructor-datails")}><img src={item.thumb} alt="img" /></Link>
                                 </div>
                                 <div className="instructor__content">
                                    <h2 className="title"><Link to={toAbsoluteUrl("/instructor-datails")}>{item.title}</Link></h2>
                                    <span className="designation">{item.designation}</span>
                                    <p className="avg-rating">
                                       <i className="fas fa-star"></i>{item.rating}
                                    </p>
                                    <div className="instructor__social">
                                       <ul className="list-wrap">
                                          <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                          <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                          <li><Link to="#"><i className="fab fa-whatsapp"></i></Link></li>
                                          <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Instructor
