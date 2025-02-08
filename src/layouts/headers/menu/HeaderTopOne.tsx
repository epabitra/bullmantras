import { Link } from "react-router-dom"
import { toAbsoluteUrl } from "../../../helper/HelperConstants";
import { address, countryCode, email, mobileNo } from "../../../helper/CommonConstants";

interface HeaderTopOneProps {
   style: boolean;
}

const HeaderTopOne = ({ style }: HeaderTopOneProps) => {
   return (
      <div className="tg-header__top">
         <div className={`container ${style ? "" : "custom-container"}`}>
            <div className="row">
               <div className="col-lg-6">
                  <ul className="tg-header__top-info list-wrap">
                     <li><img src={toAbsoluteUrl("/assets/img/icons/map_marker.svg")} alt="Icon" /> <span>{address}</span></li>
                     <li><img src={toAbsoluteUrl("/assets/img/icons/envelope.svg")} alt="Icon" /> <Link to={`mailto:${email}`}>{email}</Link></li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <div className="tg-header__top-right">
                     <div className="tg-header__phone">
                        <img src={toAbsoluteUrl("/assets/img/icons/phone.svg")} alt="Icon" />Call us: <Link to={`tel:${mobileNo}`}>{countryCode} {mobileNo}</Link>
                     </div>
                     <ul className="tg-header__top-social list-wrap">
                        <li>Follow Us On :</li>
                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-whatsapp"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne
