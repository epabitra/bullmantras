import { Link } from "react-router-dom"
import InjectableSvg from "../../hooks/InjectableSvg"
import { toAbsoluteUrl } from "../../helper/HelperConstants"

const Social = () => {
   return (
      <>
         <li>
            <Link to="https://www.facebook.com/" target="_blank">
               <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/facebook.svg")} alt="img" className="injectable" />
            </Link>
         </li>
         <li>
            <Link to="https://www.facebook.com/" target="_blank">
               <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/twitter.svg")} alt="img" className="injectable" />
            </Link>
         </li>
         <li>
            <Link to="https://www.facebook.com/" target="_blank">
               <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/whatsapp.svg")} alt="img" className="injectable" />
            </Link>
         </li>
         <li>
            <Link to="https://www.facebook.com/" target="_blank">
               <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/instagram.svg")} alt="img" className="injectable" />
            </Link>
         </li>
         <li>
            <Link to="https://www.facebook.com/" target="_blank">
               <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/youtube.svg")} alt="img" className="injectable" />
            </Link>
         </li>
      </>
   )
}

export default Social
