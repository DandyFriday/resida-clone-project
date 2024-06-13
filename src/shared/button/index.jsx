import React from 'react'
import "./buttonStyles.css"

const Button = ({style, btn_name, outline, rightIcon, leftIcon}) => {
  return (
    <button style={style} className={`${outline ? "outline" : "btn"}`}> 
    { leftIcon && <span className='left_icon'>{leftIcon}</span>}
    {btn_name}    
    {rightIcon && <span className='right_icon'>{rightIcon}</span> }  
    </button>
  );
}

export default Button;