/**
 * Footer.tsx
 *
 * This component represents the footer of the application.
 * It displays a simple footer with some text content.
 */
import React from 'react';

import './Footer.scss'

const Footer: React.FC = () => {

    return (
        <footer>
            <h6 className="footer-text">Brandon Paleczny - Optimum Energy - Frontend Take Home </h6>
        </footer>
    )
}

export default Footer;