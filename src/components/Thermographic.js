import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import thermographic1 from '../images/thermography1.jpg'
import thermographic2 from '../images/thermography2.jpg'
import '../styles/style.css';

function Thermographic() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>THERMOGRAPHIC SCANNING</h1>
                        <p>
                            <img src={thermographic1} alt="" />
                        </p>
                        <p>
                            <img src={thermographic2} alt="" />
                        </p>
                        <ul>
                            <li>Thermal imaging surveys are non-invasive and non-destructive allowing the thermal imaging survey to be completed whilst plant and equipment is running, in production and on load.</li>
                            <li>Thermal imaging surveys are real time and produce fast, accurate and immediate temperature measurement and fault detection.</li>
                            <li>Increased reliability and efficiency of plant and equipment resulting in reduced breakdowns and stoppages and significantly reduced maintenance costs and production losses.</li>
                            <li>Assists businesses to comply with The Electricity at Work Act by complementing the electrical periodic test and inspection and helping to prove the integrity and safety of electrical systems and equipment.</li>
                            <li>Assists businesses to comply with insurance requirements and complements their existing risk avoidance measures.</li>
                            <li>Thermal image surveys can be incorporated into existing predictive and preventative maintenance programs.</li>
                            <li>Thermal image surveys can be performed at a convenient time and tailored to each client’s individual requirements.</li>
                            <li>Increased energy efficiency.</li>
                            <li>Increased capital equipment lifespan.</li>
                            <li>Increased safety.</li>
                            <li>Reduced risk of fire.</li>
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

export default Thermographic;