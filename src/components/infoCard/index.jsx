import React from "react";
import "./infoStyles.css";
import viewer from "../../assets/viewer.png";
const InfoCard = () => {
  return (
    <div className="info_container">
      {/* left */} 
      <section className="info_image_section">
        <img src={viewer} alt="info_img" className="image" />
      </section>

      {/* right */}
      <section className="info_text_section">    

        <div className="info">
          <span className="info_title">Resida is Not Just an App</span>
        </div>
        <div className="header_text"> 
          <h2>We are an ecosystem with you at the center</h2>
        </div>
        <div className="text_body">Resida aims to bridge the gap between potential tenants and<br/> available properties. This app is not just a tool; it's a solution for
        <br/> individuals and families who are navigating the challenging terrain
        <br/> of apartment hunting in a new or familiar city {""}. 

        </div> 
            
      </section>
    </div>
  );
};

export default InfoCard;