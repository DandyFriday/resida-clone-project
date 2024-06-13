import React from 'react'
import "./headerStyle.css"
import logo1 from '../../assets/logo1.svg';
import {Link} from "react-router-dom";
import Button from '../button';
import { MdOutlineMenuOpen } from "react-icons/md";


const Header = () => {
  return (
    <div className='header_container'>
      {/*menu*/}
      <div className='menu'>
      <MdOutlineMenuOpen color='#1f4b43' size={32}/>

        
      </div>
        {/*logo */}
        <div className='desktop_logo'>
        <img src={logo1} alt="Logo" />
      
        </div>
        <div className='mobile_logo'>
        <img src={logo1} alt="Logo" />
      
        </div>
        {/*CTA */}
        <div className='header_cta_section'>
            
            <ul>
              {nav.map(({to, name}, idx) => {
                return (
                  <li key={idx}>
                    <Link to={to}>{name}</Link>
                  </li>
                );
              })}
            </ul>
            <div>
              <Button btn_name={"Download App"} outline />              
            </div>

        </div>
    </div>
  )
}

export default Header;

const nav =[
  {
  name:"Contact",
  to:"/contact",
},
];
