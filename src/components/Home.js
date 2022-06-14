import React from 'react';
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import TopButton from './TopButton'
import energymate from '../images/1402901473_lightbulb.png'
import emergency from '../images/1402901323_phone.png'
import commercial from '../images/1402901519_flash-outline.png'
import domestic from '../images/1402901344_home.png'
import catering from '../images/1402901359_wine.png'
import maintenance from '../images/1402901333_spanner.png'
import neca from '../images/neca.jpg'
import electrical_logo from '../images/EcoSmart-Electricians-logo.jpg'
import bus_logo from '../images/c-bus-logo.jpg'
import wpcg_logo from '../images/wpcg-logo.png'
import '../styles/style.css';

function Home() {
    return (
        <div>
            <HomeHeader />
            <div className='section-3'>
                <div className='section3-content row'>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/energymate">
                            <div>
                                <img src={energymate} width="108" height="108" alt=""/>
                                <h5>ENERGYMATE</h5>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/node/77">
                            <div>
                                <img src={emergency} width="108" height="108" alt=""/>
                                <h5>24/7 EMERGENCY</h5>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/commercial">
                            <div>
                                <img src={commercial} width="108" height="108" alt=""/>
                                <h5>COMMERCIAL</h5>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/domestic">
                            <div>
                                <img src={domestic} width="108" height="108" alt=""/>
                                <h5>DOMESTIC</h5>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/commercial-catering">
                            <div>
                                <img src={catering} width="108" height="108" alt=""/>
                                <h5>COMMERCIAL<br/>CATERING</h5>
                            </div>
                        </a>
                    </div>
                    <div className='col-md-2 col-sm-4 col-6 p-0 yellow-btn'>
                        <a href="/maintenance">
                            <div>
                                <img src={maintenance} width="108" height="108" alt=""/>
                                <h5>MAINTENANCE</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='home-body'>
                <div className='home-body-content row'>
                    <div className='col-md-8 body-left'>
                        <h1 className="body-title">About Five Star Electrical</h1>
                        <p className='body-subtitle'><strong>Our aim is to provide clients with high quality services, efficiently and effectively.</strong></p>
                        <h2>Who are we?</h2>
                        <ul>
                            <li>Five Star Electrical was established in 1994, and today is one of Canberra’s leading electrical contractors</li>
                            <li>The company is an authorised Level 2 service provider and accredited by the National Electrical Communication Association (NECA) to deliver Ecosmart electrical solutions.</li>
                            <li>Our proud history has been developed through continually delivering quality services to all levels of Government and their associated departments and agencies, and a number of Facility management companies as well as commercial corporations.</li>
                            <li>Our team of technicians concentrates on delivering client projects and services on budget in a timely and efficient manner.</li>
                        </ul>
                    </div>
                    <div className='col-md-4 body-right'>
                        <div className='body-right-top'>
                            <h2>Why choose us?</h2>
                            <ul>
                                <li>Fast, friendly service</li>
                                <li>24/7 service availability</li>
                                <li>Value for money</li>
                                <li>20 years of service history</li>
                                <li>We guarantee you will ring us back!</li>
                            </ul>
                        </div>
                        <h2>Accreditation</h2>
                        <p>
                            <img src={neca} alt=""/>
                            <img src={electrical_logo} alt=""/>
                            <img src={bus_logo} alt="" style={{marginRight : '15px'}}/>
                            <img src={wpcg_logo} alt=""/>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <TopButton />
        </div>    
    );
}

export default Home;