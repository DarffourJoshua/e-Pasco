import React from 'react';
import flogo from '../Images/footer.jpeg'
export default function Footer() {
    return (
        <footer style={{
            display: 'flex'
        }}>
            <img src= {flogo} alt='footer-logo' />
            <p style={{
                marginLeft: 'auto'
            }}>
                <a href='/#'>copyright Drakula</a>
            </p>
        </footer>
    );
}