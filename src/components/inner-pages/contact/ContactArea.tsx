import ContactForm from "../../../forms/ContactForm"
import { address, countryCode, email, mobileNo } from "../../../helper/CommonConstants"
import InjectableSvg from "../../../hooks/InjectableSvg"

const ContactArea = () => {
   return (
      <section className="contact-area pb-5">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="contact-info-wrap">
                     <ul className="list-wrap">
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/map.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Address</h4>
                              <p>{address}</p>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/contact_phone.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">Phone</h4>
                              <a href={`tel:${mobileNo}`}>{countryCode} {mobileNo}</a>
                              <a href={`tel:${mobileNo}`}>{countryCode} {mobileNo}</a>
                           </div>
                        </li>
                        <li>
                           <div className="icon">
                              <InjectableSvg src="assets/img/icons/emial.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <h4 className="title">E-mail Address</h4>
                              <a href={`mailto:${email}`}>{email}</a>
                              <a href={`mailto:${email}`}>{email}</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="col-lg-8">
                  <div className="contact-form-wrap">
                     <h4 className="title">Send Us Message</h4>
                     <p>Your email address will not be published. Required fields are marked *</p>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
            <div className="contact-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20241.591529827358!2d85.81197835239603!3d20.272735695299797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1741884159603!5m2!1sen!2sin" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
