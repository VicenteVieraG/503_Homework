import React from 'react';
import "../styles/header.css";

const Header = () => {
    return(
        <div className="header-container">
            <h1 data-cy="header" className="header">Hola Crayola</h1>
            <h2 data-cy="header-2" className="header-2">Welcome To my
                <span data-cy="span" className="Cypress-title"> Cypress </span>
                Test
            </h2>
        </div>
    );
}

export default Header;