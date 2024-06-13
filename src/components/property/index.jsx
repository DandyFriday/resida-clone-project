import React from "react";
import "./propertyStyles.css";
import propertyimage from "../../assets/propertyimage.jpg";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import Ellipse4 from "../../assets/Ellipse4.png";
import Button from "../../shared/button";
import { GoArrowRight } from "react-icons/go";
const Property = ({circle}) => {
  return (
    <div className="prop_container flex">
      {/* left */}        
      <section className="prop_text_section">  
        {circle && (
        <div className="prop_circle">
          <div className="prop_circle_img">
          <img src={Ellipse1} alt="propcircle" className="ellipse_img1"/>
          <img src={Ellipse2} alt="propcircle" className="ellipse_img2"/>
          <img src={Ellipse3} alt="propcircle" className="ellipse_img3"/>
          <img src={Ellipse4} alt="propcircle" className="ellipse_img4"/>
          </div>
          

        </div>)}

        <div className="guides">
          <span>Do you have a property?</span>
        </div>
        <div>Provide accommodation <br/>here in Lagos</div>    
        
        <div className="prop_text_body">
          Own a property in Lagos? Join our platform to effortlessly list your<br/>
          accommodations and connect with eager tenants seeking their <br/>
          perfect home in the vibrant city of Lagos.
        </div>
        <div className='prop_cta'>
        <Button style={{
            backgroundColor:"#dba94d",
            color:"#1f4b43",
            padding:"7px 12px",
            width:"240px",
            
        }} 
        btn_name={"Download our app"}
        rightIcon={<GoArrowRight size={16}/>
    } />
    </div>      

      </section>      
      <section className="prop_image_section">
       <img src={propertyimage} alt="officespace_img" className="image" />
      </section>
      

    </div>
  );
};

export default Property;