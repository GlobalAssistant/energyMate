import React from 'react';
import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import '../styles/style.css';

function Contact() { 

    let flag = 0;

    const onSubmit = () => {
        if(flag === 0){
            document.getElementsByClassName('result')[0].innerHTML = 'Enquiry submitted successfully!';
            document.getElementsByClassName('result')[0].style.color = '#03c703';
            flag ++;
        }else if(flag === 1){
            document.getElementsByClassName('result')[0].innerHTML = 'There was an error submitting your enquiry!';
            document.getElementsByClassName('result')[0].style.color = 'red';
            flag ++;
        }else if(flag === 2){
            document.getElementsByClassName('result')[0].innerHTML = '';
            flag = 0;
        }
        
    }

    return (
        <div>
            <Header />
            <div className='commercial'>
                <div className='commercial-content row'>
                    <div className='col-md-8 commercial-left'>
                        <h1>ONLINE QUOTE/BOOK IN A JOB</h1>
                        <h2>How can we help?</h2>
                        <p>Please complete the form below and we'll get back to you as soon as possible.</p>
                        <p>For all emergency calls please phone 02 6239 3550 for service.</p>
                        <div class="form-section">
                            <div class="form-part">
                                <p>Name <span>*</span></p>
                                <input type="text" size="60" maxlength="128"/>
                            </div>
                            <div class="form-part">
                                <p>Email <span>*</span></p>
                                <input type="email" size="60" maxlength="128"/>
                            </div>
                            <div class="form-part">
                                <p>Phone <span>*</span></p>
                                <input type="text" size="60" maxlength="128"/>
                            </div>
                            <div class="form-part">
                                <p>Job type <span>*</span></p>
                                <select>
                                    <option value="" selected="selected">- Select -</option>
                                    <option value="1">Domestic</option>
                                    <option value="2">Commercial</option>
                                    <option value="3">Catering</option>
                                </select>
                            </div>
                            <div class="form-part">
                                <p>Message <span>*</span></p>
                                <textarea cols="110" rows="5"/>
                            </div>
                            <button className='submit-btn' onClick={onSubmit}>SUBMIT</button>
                            <p className='result'></p>
                        </div>
                    </div>
                    <div className='col-md-4 p-0'>
                        <div className='part-right'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.377398181606!2d149.17835950000003!3d-35.3214487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164dcb5105ac1f%3A0x294b4cad8606a208!2s79%2F81+Gladstone+St!5e0!3m2!1sen!2sau!4v1402936850649" width="100%" height="300" frameborder="0" style={{border:"0"}} title="map" />
                        </div>
                        <div className='part-right'>
                            <h2>Get in touch</h2>
                            <h3>02 6239 3550</h3>
                            <p><strong>Office address</strong><br />Unit 8, 79-81 Gladstone Street<br />Fyshwick ACT 2609</p>
                            <p><strong>Postal address</strong><br />PO Box 48<br />Fyshwick ACT 2609</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <TopButton />
        </div>    
    );
}

export default Contact;