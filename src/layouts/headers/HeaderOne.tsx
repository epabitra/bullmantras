import HeaderTopOne from "./menu/HeaderTopOne"
import NavMenu from "./menu/NavMenu"
import { useState } from "react"
import MobileSidebar from "./menu/MobileSidebar"
import UseSticky from "../../hooks/UseSticky"
import { Link } from "react-router-dom"
import InjectableSvg from "../../hooks/InjectableSvg"
import { toAbsoluteUrl } from "../../helper/HelperConstants"

const HeaderOne = () => {

   // const [selectedOption, setSelectedOption] = React.useState(null);

   // const handleSelectChange = (option: React.SetStateAction<null>) => {
   //    setSelectedOption(option);
   // };

   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTopOne style={false} />
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area ${sticky ? "sticky-menu" : ""}`}>
               <div className="container custom-container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav">
                              <div className="logo">
                                 <Link to="/"><img className="h-100px" src={toAbsoluteUrl("/assets/img/logo/logo.svg")} alt="Logo" /></Link>
                              </div>
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <NavMenu />
                              </div>
                              {/* <div className="tgmenu__search d-none d-md-block">
                                 <CustomSelect value={selectedOption} onChange={handleSelectChange} />
                              </div> */}
                              <div className="tgmenu__action">
                                 <ul className="list-wrap">
                                    {/* <li className="wishlist-icon">
                                       <Link to={toAbsoluteUrl("#")} className="cart-count">
                                          <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/heart.svg")} className="injectable" alt="img" />
                                          <TotalWishlist />
                                       </Link>
                                    </li>
                                    <li className="mini-cart-icon">
                                       <Link to={toAbsoluteUrl("#")} className="cart-count">
                                          <InjectableSvg src={toAbsoluteUrl("/assets/img/icons/cart.svg")} className="injectable" alt="img" />
                                          <TotalCart />
                                       </Link>
                                    </li> */}
                                    <li className="header-btn login-btn">
                                       <Link to={toAbsoluteUrl("/contact")}>Enroll Now</Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="mobile-login-btn">
                                 <Link to={toAbsoluteUrl("#")}><InjectableSvg src={toAbsoluteUrl("/assets/img/icons/user.svg")} alt="" className="injectable" /></Link>
                              </div>
                              <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default HeaderOne
