import React from 'react';
import mcdonalds_logo from '../images/mcdonalds-logo.png'
import unknown from '../images/1439966066_unknown2_0.png'
import phone from '../images/1402952957_phone.png'
import '../styles/style.css';

function Footer() {
    return (
        <div>
            <div className='footer-section-1'>
                <div className='footer-section1-content row'>
                    <div className='col-md-4 footer-section1-part'>
                        <div className="footer-section1-subpart1">
                            <div className="img-left">
                                <img src={mcdonalds_logo} width="76" height="76" alt=""/>
                            </div>
                            <div className="extra">
                                <h3>Exceeded our expectation</h3>
                            </div>
                        </div>
                        <p>"We have obtained great benefits using EnergyMate in our establishments. In turn seeing a 10% or greater saving in kilowatts and KVA and a visible reduction in repairs and maintenance"</p>
                        <div className="footer-section1-subpart2">—Craig Coleman, McDonald’s Franchisee</div>
                    </div>
                    <div className='col-md-4 footer-section1-part'>
                        <div className="footer-section1-subpart1">
                            <div className="img-left">
                                <img src={unknown} width="76" height="76" alt=""/>
                            </div>
                            <div className="extra">
                                <h3>BEST SERVICES IN TOWN!</h3>
                            </div>
                        </div>
                        <p>"Had a great experience from the start with a welcoming phone call through to great service provided by the technician who turned up with in the hour, got the job done – happy client"</p>
                        <div className="footer-section1-subpart2">—Jan</div>
                    </div>
                    <div className='col-md-4 footer-section1-part'>
                        <div className="footer-section1-subpart1">
                            <div className="img-left">
                                <img src={unknown} width="76" height="76" alt=""/>
                            </div>
                            <div className="extra">
                                <h3>INFORMATIVE AND POLITE</h3>
                            </div>
                        </div>
                        <p>"Thank you very much for the efficient friendly work from Sam, turned up right on time, very happy about my kitchen bench food preparation light now fixed, payment made very easy too"</p>
                        <div className="footer-section1-subpart2">—Carlene</div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="grid">      
                            <div className="row up-content">
                                <div className="col-3 col-md-3 col-sm-12 col-12">
                                    <div>
                                        <h1>COMMARICAL</h1>
                                        <ul>
                                                <li>
                                                    <a href="/commercial">Commerical</a>
                                                </li>
                                                <li>
                                                    <a href="/cbus">CBUS</a>
                                                </li>
                                                <li>
                                                    <a href="/thermographic-scanning">Thermographic scanning</a>
                                                </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>PROJECTS</h1>
                                        <ul>
                                                <li>
                                                    <a href="/projects">Projects</a>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 col-sm-12 col-12">
                                    <div>
                                        <h1>DOMESTIC</h1>
                                        <ul>
                                                <li>
                                                    <a href="/domestic">Domestic</a>
                                            </li>
                                        </ul>
                                    
                                        <h1>EnergyMate</h1>
                                        <ul>
                                                <li>
                                                    <a href="/energymate">EnergyMate</a>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 col-sm-12 col-12">
                                    <div>
                                        <h1>CATERING</h1>
                                        <ul>
                                                <li>
                                                    <a href="/commercial-catering">Commerical catering</a>
                                                </li>
                                        </ul>
                                        <h1>MAINTENANCE</h1>
                                        <ul>
                                                <li>
                                                    <a href="/maintenance">Maintenance</a>
                                                </li>
                                        </ul>  
                                    </div>
                                    
                                </div>
                                <div className="col-3 col-md-3 col-sm-12 col-12">
                                    <h1>CONTACT</h1>
                                    <h1 style={{color:"#fff"}}>
                                        <img src={phone} style= {{margin: "4px 4px 0 0"}} alt=""/> 
                                        <strong>02 6239 3550</strong>
                                    </h1>
                                    <ul>
                                                <li>
                                                    <a href="online-quotebook-job">Quote request form</a>
                                                </li>
                                        </ul>  
                                    
                                    <p>
                                        <strong>Office address</strong>
                                        <br/>
                                        Unit 8, 79-81 Gladstone 
                                        <br/>
                                        Fyshwick ACT 2609
                                    </p>
                                </div>
                            </div>  
                    </div>
                </div>
                <div className="footer-container">
                    <div class = "row bottom-content">
                            <div>
                                <p>Five Star Electrical | Canberra © 2022</p>
                                {/* <p><span>Desktop Version Only </span>
                                    Website by 
                                    <span>
                                    <a href="www.giraffe.com.au" id="span-a">giraffe.com.au</a>
                                    </span>
                                </p> */}
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>    
    );
}

export default Footer;