import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import doodle from '../images/incandescent-bulb-with-doodle-light_73324.jpg'
import '../styles/style.css';

function Domestic() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>DOMESTIC</h1>
                        <p className='domestic-left'>
                            <img src={doodle} alt="" />
                        </p>
                        <ul>
                            <li>Internal and external lighting and power</li>
                            <li>Smoke detectors and safety switches</li>
                            <li>Data and phone cabling</li>
                            <li>Replacement or upgrade of switchboard to update with circuit breaker</li>
                            <li>LED lighting</li>
                            <li>RCD testing</li>
                            <li>Thermographic testing of switchboards</li>
                            <li>Electrical maintenance</li>
                            <li>Installation of ceiling fans</li>
                            <li>Annual servicing of heaters - contact us for periodic set up</li>
                            <li>Maintenance for ovens, hot plates and exhaust fans</li>
                        </ul>
                    </div>
                    <div className='col-md-4 p-0'>
                        <SubForm />
                    </div>
                </div>
            </div>
            <Footer />
            <TopButton />
        </div>    
    );
}

export default Domestic;