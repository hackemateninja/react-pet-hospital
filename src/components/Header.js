import React from 'react';
import Logo from '../logo.svg';
import PropTypes from 'prop-types';

const Header = ({titulo})=>(
    <header className="d-flex justify-content-center align-items-center">
        <img src={Logo} className="logo" alt="Logo react"/>
        <h1 className=' text-white'>{titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}
export default Header;
