import React from "react";
import "./officeSpaceStyles.css";
import officeImage from "../../assets/officeImage.png";



const OfficeSpace = () => {
  return (
    <div className="os_container flex">
      {/* left */}
      <section className="os_image_section">
        <img src={officeImage} alt="officespace_img" className="image" />
      </section>

      {/* right */}
      <section className="os_text_section">    

        <div className="guides">
          <span>Need an Office Space?</span>
        </div>
        <div className="text_body">
        Seeking office space in Lagos? Look no further! Our accommodations
        <br/> offer tailored solutions to meet your workspace needs, ensuring 
        <br/>productivity and comfort in the heart of Lagos
        </div>       
      </section> 
    </div>
  );
};

export default OfficeSpace;