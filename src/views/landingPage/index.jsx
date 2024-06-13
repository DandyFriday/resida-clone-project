import React from 'react'
//import "./landingPageStyle.css";
import Header from '../../shared/header';
import HeroSection from "../../components/heroSection/index";
import SubHeroSection from '../../components/subHeroSection';
import InfoCard from '../../components/infoCard';
import OurExperience from '../../components/ourExperience';
import FeaturedProperties from '../../components/featuredProperties';
import Comprehensive from '../../components/comprehensive';
import Property from '../../components/property';
import Discover from '../../components/discovery/index';
 import AppStores from '../../components/appStores';
// import FeaturedCard from '../../shared/featuredCard';
import DreamHome from '../../components/dreamHome';
import OfficeSpace from '../../components/officeSpace';
import FindHome from "../../components/findHome";
import Footer from '../../shared/footer';


const LandingPage = () => {
  return (
    <div>
      <Header /> 
      <HeroSection/> 
      <SubHeroSection />      
       <InfoCard/> 
      {/* Our Experience \*/}
      <OurExperience />
      {/*Your Dream Home */}
      <DreamHome />
      {/* Comprehensive */}
      <Comprehensive />
      {/* Featured Properties and Card */}
      <FeaturedProperties />
      {/*  Property section*/} 
      <Property 
      circle={true}/>
      {/*  Discover section*/}    
      <Discover /> 
      {/* Find Home */}
      <FindHome />
      {/*  Office Space section*/}
      <OfficeSpace /> 
         {/*  AppStores section*/}
      <AppStores /> 
                  {/*footer section  */}
      
      <Footer />

    </div>
  )
}

export default LandingPage;