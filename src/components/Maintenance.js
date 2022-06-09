import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import SubForm from './SubForm';
import maintenance_img from '../images/image00.jpg'
import '../styles/style.css';

function Domestic() {
    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>MAINTENANCE</h1>
                        <p className='domestic-left'>
                            <img src={maintenance_img} alt="" />
                        </p>
                        <p>Five Star Electrical have over 20 years experience in delivering maintenance ‘five star’ services on time. We have an outstanding history of delivering maintenance services to Government departments, schools, facility management companies and corporate clients. Our key strength lies in the implementation of systems to automate and integrate processes to efficiently deliver services and to comply with contract requirements.</p>
                        <ul>
                            <li>24/7 service, 365 days a year</li>
                            <li>Routine and reactive maintenance</li>
                            <li>Periodic maintenance</li>
                            <li>Online workflow management system</li>
                            <li>Job management, task allocation and job tracking via workflow management system</li>
                            <li>Real time feedback to client via technicians on site to assist with client KPI’s</li>
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