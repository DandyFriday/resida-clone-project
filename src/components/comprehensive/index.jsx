import React from "react";
import "./comprehensiveStyles.css";
import variant1 from "../../assets/variant1.png";
import Button from "../../shared/button";
import { GoArrowRight } from "react-icons/go";

const Comprehensive = () => {
  return (
    <div className="cmp_container flex">
      {/* left */}
      <section className="cmp_image_section">
        <img src={variant1} alt="comprehensive_img" className="image" />
      </section>

      {/* right */}
      <section className="cmp_text_section">
        <div>
          <p>Comprehensive</p>
        </div>
        <div className="guides">
          <span>Neighborhood Guides</span>
        </div>
        <div className="text_body">
        The 'Neighborhood Guides' in Resida are like your friendly local 
        <br/>experts, giving you the inside scoop on the vibe, hotspots, and 
        <br/>quirks of each area so you can find your perfect match
        <br/>
         effortlessly! 🏡✨
        </div>
        <div className='cmp_cta'>
        <Button style={{
          backgroundColor:"#dba94d",
          color:"#1f4b43",
          padding:"7px 12px",
          width:"240px",
            
        }} 
        btn_name={"Download our app"}
        rightIcon={<GoArrowRight size={16}/>
  }/> 
    </div>
      </section>
    </div>
  );
};

export default Comprehensive;