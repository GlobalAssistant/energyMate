import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import cbus_img from '../images/CBUS-PAGE.jpg'
import '../styles/style.css';

function Cbus() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>CBUS</h1>
                        <p className='domestic-left'>
                            <img src={cbus_img} alt="" />
                        </p>
                        <p>Having Clipsal CBUS certified technicians allowing Five Star Electrical to maintain its market leading position in lighting management systems. Our experience includes design, installation and commissioning of CBUS and DALI systems in a variety of installations.</p>
                        <ul>
                            <li>Enhance your lifestyle by combining today’s modern technology.</li>
                            <li>Controls more than just lighting, C-bus has the ability to operate devices such as motorised blinds, air conditioning, pool and spa pumps, security systems and home theatres, just to name a few.</li>
                            <li>Can be individually programmed to suit YOUR home and lifestyle.</li>
                            <li>Designed so the whole family can operate it, through touch screens, DLT’s and other wall switches which can be blended into your home.</li>
                            <li>Whether you are outside or away from your home, C-bus gives you complete control via a web-enabled device such as a smart-phone, laptop or tablet pc.</li>
                            <li>Elements such as lighting, audio visual systems and air conditioning can be programmed to work in unison at the touch of a button</li>
                            <li>Referred to as a “scene” this function allow a specific mood or atmosphere to be created quickly and easily</li>
                            <li>Home security</li>
                            <li>Keyless entry</li>
                            <li>Home theatre</li>
                            <li>Lighting control</li>
                            <li>Irrigation</li>
                            <li>Multi-Room Audio</li>
                            <li>Windows and blinds</li>
                            <li>Air conditioning</li>
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

export default Cbus;