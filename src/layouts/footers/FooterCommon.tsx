import { Link } from "react-router-dom"
import { toAbsoluteUrl } from "../../helper/HelperConstants"
import { address, countryCode, mobileNo } from "../../helper/CommonConstants"

const FooterCommon = () => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget">
               <div className="logo mb-35">
                  <Link to="/"><img className="h-100px" src={toAbsoluteUrl("/assets/img/logo/logo.svg")} alt="img" /></Link>
               </div>
               <div className="footer__content">
                  <p>We are Now India's Growing Trading Course Which is trusted by more than 250+ Students</p>
                  <ul className="list-wrap">
                     <li>{address}</li>
                     <li>{countryCode} {mobileNo}</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Useful Links</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link to="#">Courses</Link></li>
                     <li><Link to="#">Pages</Link></li>
                     <li><Link to="#">Dashboard</Link></li>
                     <li><Link to="#">Blog</Link></li>
                     <li><Link to="#">Event</Link></li>
                     {/* <li><Link to="/events-details">Quizlet Plus</Link></li> */}
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Our Company</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link to="#">Contact Us</Link></li>
                     <li><Link to="#">Become Teacher</Link></li>
                     <li><Link to="#">Blog</Link></li>
                     <li><Link to="#">Instructor</Link></li>
                     <li><Link to="#">Events</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}

export default FooterCommon
