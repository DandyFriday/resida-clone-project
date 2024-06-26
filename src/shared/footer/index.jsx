import React from "react";
import "./footerStyles.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer_content">
      <section className="footer_container">
        <section className="footer_section1_div">
          {/* left side */}
          <div className="left_side_div">
            <h5>Resida</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <div className="social_media_div">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
          {/* right side */}
          <div className="right_side_div">
            <div className="right_div">
              <h5>Products</h5>
              <p>Pricing</p>
              <p>Case studies</p>
              <p>Reviews</p>
              <p>Updates</p>
            </div>
            <div className="right_div">
              <h5>Company</h5>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Culture</p>
              <p>Blog</p>
            </div>
            <div className="right_div">
              <h5>Supports</h5>
              <p>Help center</p>
              <p>Server status</p>
              <p> Report a bug</p>
              <p>Chat support</p>
            </div>
            <div className="right_div">
              <h5>Legal</h5>
              <p>Privacy policy</p>
              <p>User terms of use</p>
              <p>Payment & pricing policy</p>
              <p>Cookies & data privacy</p>
            </div>
          </div>
        </section>

        {/* middle section */}
        <section className="middle_parent">
          <div className="middle_div">
            <div className="email_div">
              <div>
                <MdOutlineEmail size={16} />
              </div>
              <p>contact@company.com</p>
            </div>
            <div className="call_div">
              <div>
                <IoCallOutline size={16} />
              </div>
              <p>(414) 687 - 5892</p>
            </div>
            <div className="location_div">
              <div>
                <IoLocationOutline size={16} />
              </div>
              <p>794 Mcallister St San Francisco, 94102</p>
            </div>
          </div>
        </section>

        {/* Last section */}
        <section className="last_section">
          <hr />
          <div className="last_section_div">
            <p>Copyright © 2022 BRIX Templates</p>
            <span>
              All Rights Reserved | Terms and Conditions | Privacy Policy
              <hr />
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Footer;