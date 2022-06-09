import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import energymate_logo from '../images/EnergyMate-logo1-300x289.jpg'
import '../styles/style.css';

function Domestic() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>ENERGYMATE</h1>
                        <iframe width="640" height="360" src='//www.youtube.com/embed/uoct2JDalBc' frameborder="0" allowfullscreen="" title="myFrame"></iframe>
                        <h2>Save on your energy bill now with EnergyMate!</h2>
                        <p>The innovative <span style={{ color: "#99cc00" }}><strong>EnergyMate</strong></span> product is a precision voltage regulating technology that controls the power being delivered to your electrical infrastructure.</p>
                        <p><img src={energymate_logo} style={{float: "right", marginleft: "20px"}} alt="" /><strong>EnergyMate</strong> allows commercial or industrial enterprises to take greater control of their electrical consumption, power quality, energy cost and greenhouse emissions.</p>
                        <p><span style={{ color: "#99cc00" }}><strong>EnergyMate</strong></span> responds instantly to changes in power supply and demand levels. Managing each phase independently the technology provides advanced control and regulation of the power delivered to your plant and equipment.</p>
                        <h2>Features</h2>
                        <ul>
                            <li>reduces electrical energy consumption by 10% or more</li>
                            <li>failsafe system</li>
                            <li>delivers quality stable power at the set voltage</li>
                            <li>built in surge protection</li>
                            <li>enhances lifespan and performance of equipment</li>
                            <li>minimal maintenance requirements</li>
                            <li>reduces carbon emissions</li>
                        </ul>
                        <h4>Read more</h4>
                        <p><a href="http://www.enrams.com.au/energymate-voltage-regulation/"><strong>www.enrams.com.au/energymate-voltage-regulation/</strong></a></p>
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