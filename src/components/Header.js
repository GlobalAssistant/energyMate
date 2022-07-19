import React from 'react';
import logo from '../images/logo.png';
import phone from '../images/1402952957_phone.png';
import '../styles/style.css';

function Header(props) {
    return (
        <div className='container-fluid header-section p-0'>
            <div className='navbar-section'>
                <div className='row navbar-content'>
                    <div className='col-xl-2 logo p-0'>
                        <a href="/" title="Home" rel="home" id="logo">
                            <img src={logo} alt="Home"/>
                        </a> 
                    </div>
                    <div className='col-xl-10 p-0'>
                        <div className='content'>
                            <div className='content'>
                                <h3 className='phonenumber'>
                                    <img src={phone} alt='phone' />
                                    &nbsp;02 6239 3550&nbsp;
                                    <span>(ON CALL 24/7)</span>
                                </h3>
                            </div>
                            <ul className='main-navbar m-0'>
                                <li className='drop'>
                                    <a href="/commercial">COMMERCIAL</a>
                                    <ul className="dropdown">
                                        <li><a href="/cbus">CBUS</a></li>
                                        <li><a href="/thermographic-scanning">Thermographic scanning</a></li>
                                    </ul>
                                </li>
                                <li><a href="/domestic">DOMESTIC</a></li>
                                <li><a href="/commercial-catering">CATERING</a></li>
                                <li><a href="/projects">PROJECTS</a></li>
                                <li><a href="/energymate">ENERGYMATE</a></li>
                                <li><a href="/maintenance">MAINTENANCE</a></li>
                                <li><a href="/online-quotebook-job">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Header;