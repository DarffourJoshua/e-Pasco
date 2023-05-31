import React from 'react';
import header from '../Images/header-LOGO.jpg';

export default function Header() {
    return (
        <img 
            style={
                {
                    width: '200px',
            
                }
            }   
            src={header} 
            alt='header-logo'    
        />
    );
}