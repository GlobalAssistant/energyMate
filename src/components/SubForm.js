import React from 'react';
import '../styles/style.css';

function SubForm() {
    return (
        <div>
            <div className='part-right'>
                <h2>Quick quote</h2>
                <div class="form-section">
                    <div class="form-part">
                        <p>Name <span>*</span></p>
                        <input type="text" size="38" maxlength="128"/>
                    </div>
                    <div class="form-part">
                        <p>Email <span>*</span></p>
                        <input type="text" size="38" maxlength="128"/>
                    </div>
                    <div class="form-part">
                        <p>Phone <span>*</span></p>
                        <input type="text" size="38" maxlength="128"/>
                    </div>
                    <div class="form-part">
                        <p>How can we help you? <span>*</span></p>
                        <textarea cols="38" rows="5"/>
                    </div>
                    <button className='submit-btn'>SUBMIT</button>
                </div>
            </div>
            <div className='part-right'>
                <h2>Get in touch</h2>
                <h3>02 6239 3550</h3>
                <p><strong>Office address</strong><br />Unit 8, 79-81 Gladstone Street<br />Fyshwick ACT 2609</p>
                <p><strong>Postal address</strong><br />PO Box 48<br />Fyshwick ACT 2609</p>
            </div>
        </div>    
    );
}

export default SubForm;