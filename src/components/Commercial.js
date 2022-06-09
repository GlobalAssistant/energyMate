import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import commercial1 from '../images/commercial2.jpg'
import commercial2 from '../images/commercial1.jpg'
import '../styles/style.css';

function Commercial() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>Commercial</h1>
                        <p>
                            <img src={commercial1} alt="" />
                        </p>
                        <p>
                            <img src={commercial2} alt="" />
                        </p>
                        <ul>
                            <li>Routine, reactive and periodic maintenance services</li>
                            <li>24hr facility maintenance and breakdown assistance</li>
                            <li>Emergency and exit lighting supply, installation and maintenance</li>
                            <li>Automation systems and sensor lighting</li>
                            <li>WPCG certified technicians</li>
                            <li>Light and power installation</li>
                            <li>Auto door servicing</li>
                            <li>Thermographic scanning</li>
                            <li>CBUS maintenance and fit outs</li>
                            <li>Energy management systems</li>
                            <li>Switchboard replacements and testing</li>
                            <li>Commercial office and retail fit outs</li>
                            <li>Testing and tagging</li>
                            <li>RCD Testing</li>
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

export default Commercial;