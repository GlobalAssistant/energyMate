import React, {useState, useRef} from 'react';

import Header from './Header'
import Footer from './Footer'
import TopButton from './TopButton'
import '../styles/style.css';

const contactFormFields = {
    name: '',
    email: '',
    phone: '',
    job_type: '',
    message: ''
}

function Contact() { 
    const [formFields, setFormFields] = useState(contactFormFields);
    const { name, email, phone, job_type, message } = formFields;
    const form = useRef(null)

    const resetFormFields = () => {
        setFormFields(contactFormFields);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (job_type == '') {
            document.getElementsByClassName('result')[0].innerHTML = 'Job Type is empty!';
            document.getElementsByClassName('result')[0].style.color = 'red';
        } else {
            try {
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', formFields.email);
                formData.append('job_type', formFields.job_type);
                formData.append('phone', formFields.phone);
                formData.append('message', formFields.message);
                // console.log('formData', formData);

                fetch('https://fse.net.au/fse-contact.php', {
                    method: 'POST',
                    headers: {
                        // 'Content-Type': 'application/form-data',
                    },
                    body: formData
                }).then( res => {
                    console.log('####res##', res.status);
                    if (res.ok && res.status == 200) {
                        document.getElementsByClassName('result')[0].innerHTML = 'Enquiry submitted successfully!';
                        document.getElementsByClassName('result')[0].style.color = '#03c703';
                    } else {
                        document.getElementsByClassName('result')[0].innerHTML = 'There was an error submitting your enquiry!';
                        document.getElementsByClassName('result')[0].style.color = 'red';
                    }
                }).catch(err => {
                    console.log('####err##', err);

                    document.getElementsByClassName('result')[0].innerHTML = 'There was an error submitting your enquiry!';
                    document.getElementsByClassName('result')[0].style.color = 'red';
                })
            } catch (error) {
                console.log('####error##', error);

                document.getElementsByClassName('result')[0].innerHTML = 'There was an error submitting your enquiry!';
                document.getElementsByClassName('result')[0].style.color = 'red';
            }
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
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-section">
                                <div className="form-part">
                                    <p>Name <span>*</span></p>
                                    <input type="text" size="60" name="name" value={name} onChange={handleChange} required/>
                                </div>
                                <div className="form-part">
                                    <p>Email <span>*</span></p>
                                    <input type="email" size="60" name="email" value={email} onChange={handleChange} required/>
                                </div>
                                <div className="form-part">
                                    <p>Phone <span>*</span></p>
                                    {/* <input type="tel" size="60" name="phone" value={phone} onChange={handleChange} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> */}
                                    <input type="tel" size="60" name="phone" value={phone} onChange={handleChange} pattern="[0-9]{10}" required/>

                                </div>
                                <div className="form-part">
                                    <p>Job type <span>*</span></p>
                                    <select value={job_type} name="job_type" onChange={handleChange}>
                                        <option value="">- Select -</option>
                                        <option value="1">Domestic</option>
                                        <option value="2">Commercial</option>
                                        <option value="3">Catering</option>
                                    </select>
                                </div>
                                <div className="form-part">
                                    <p>Message <span>*</span></p>
                                    <textarea cols="110" rows="5" name="message" value={message} onChange={handleChange}/>
                                </div>
                                <button className='submit-btn' type="submit">SUBMIT</button>
                                <p className='result'></p>
                            </div>
                        </form>
                        
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