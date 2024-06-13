
import React from 'react'
import "./heroSectionStyles.css";
import Button from '../../shared/button';
import bgImage from '../../assets/bgImage.png'

const HeroSection = () => {
  return (
    <div className={"hero_section_container"}
    style={{
      backgroundImage:`url(${bgImage})`
    }} >     
      <div className='hero_section_content'>
       <p>Finding the perfect home has never been this easy!</p>
       <span>{`Eliminate stressful house searches. We link you with the Lagos’s finest and most affordable residences `}- <strong>Zero agent fees, middle men payments & hassles. </strong></span>
        <div className='btn_container'>
         <Button  
         //style={{
            //width:"35%",
         //}} 
         btn_name={"Download our app"} /> 
         <Button 
         //style={{
            //width:"32%",
         //}} 
          outline
          btn_name={"Learn more"} />
        </div>  
       </div>
    </div>
  );
}

export default HeroSection;