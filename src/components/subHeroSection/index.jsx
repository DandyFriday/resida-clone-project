import React from 'react'
import "./subHeroStyles.css"
import Button from '../../shared/button'
import { GoArrowRight } from "react-icons/go";

const SubHeroSection = () => {
  return (
   <section className='sub_hero_section_container'>
    <div className='sub_hero_text'>
        <h3>Resida nullifies the hassles of agents </h3>
        <p>
            Save properties, create alerts and keep track of the enquiries you send to agents.
        </p>
    </div>
    <div className='sub_hero_cta'>
        <Button style={{
            backgroundColor:"#dba94d",
            color:"#1f4b43",
            padding:"7px 12px",
            width:"250px",
        }} 
        btn_name={"Download our app"}
        rightIcon={<GoArrowRight size={22}/>
    } />
    </div>
   </section>
  );
};

export default SubHeroSection;