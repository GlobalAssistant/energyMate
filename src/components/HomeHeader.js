import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../images/logo.png';
import phone from '../images/1402952957_phone.png';
import '../styles/style.css';

function Header(props) {
    console.log(props.location)
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
                                    <a href="/fse/node/77">(ON CALL 24/7)</a>
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
            <div className='section-2'>
                <div className='section-2-content'>
                    <Carousel indicators={false} slide={false}>
                        <Carousel.Item>
                            <div className='carousel-text'>
                                PROVIDING THE HIGHEST<br />QUALITY SERVICE
                            </div>
                                <a className='red-btn' href="/domestic">FIND OUT MORE</a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-text'>
                                SWITCH TO A<br />TRUSTED COMPANY
                            </div>
                            <a className='red-btn' href="/domestic">FIND OUT MORE</a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='carousel-text'>
                                NEED AN<br />ELECTRICIAN?
                            </div>
                            <a className='red-btn' href="/domestic">FIND OUT MORE</a>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>    
    );
}

export default Header;