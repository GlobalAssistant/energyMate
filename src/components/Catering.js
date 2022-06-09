import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import catering1 from '../images/catering1.jpg'
import catering2 from '../images/catering2.jpg'
import '../styles/style.css';

function Domestic() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>COMMERCIAL CATERING</h1>
                        <p>Five Star Electrical provides quality, reliable appliance service & repairs on-site or at our Service Repair Centre in Fyshwick.</p>
                        <p className='domestic-left'>
                            <img src={catering1} alt="" />
                        </p>
                        <p>Our services includes Equipment Auditing and Preventative Maintenance Service Scheduling. We will schedule your service request and inform you of a date and time when our qualified technician will attend your business and service your appliance(s). We also provide a 24-hour emergency repairs service throughout Canberra and surrounding areas. This means any unforeseen breakdown is dealt with promptly. Don't hesitate to contact us for more information about our range of products and services.</p>
                        <p className='domestic-left'>
                            <img src={catering2} alt="" />
                        </p>
                        <p>We carry out servicing, periodic maintenance and breakdown work on the following:</p>
                        <ul>
                            <li>Dishwashers, Combi ovens, Bain maries, Hot boxes, Bratt pans, Salamanders, Pizza ovens, Vacuum packaging machines, Glass washers, Rational ovens, Tea urns, Hot plates, Dough mixers, Toasters, Exhaust hoods, Heat lamps</li>
                        </ul>
                        <p>Below is some of the commercial catering equipment brands that we carry out repairs and periodic maintenance for. Please note we do service other brands contact for more details:</p>
                        <ul>
                            <li>Austheat, Blue Seal, Bonn, Comcater, Crown, Electrolux, Eswood, Fagor, Fed, Foster, Frima, Frymaster, Goldstein Eswood, Hobart, International Catering Equipment, Meiko, Metos Kettles, Middleby Marshall, Norris, Pizza Master, Rationals, Robot Coupe, Sammic, Trident, Unox, Washtec, Winterhalter, Zanussi</li>
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