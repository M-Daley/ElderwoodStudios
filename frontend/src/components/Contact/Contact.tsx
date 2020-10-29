import React from 'react';
import './css/Contact.css';

export const Contact: React.FC = (props: any) => (
    <section id="Contact" className="page">
        <h1>Contact Me</h1>
        <div className="contact-container">
            <div className="contact-form-container">
                {/* <div className="commission-review-container"></div> */}
                <div className="checkout-options">
                    <div className="contact-price-total">{props.priceTotal}</div>
                    <div className="contact-commission-options">{props.commissionOptions}</div>
                </div>
                <form action="/contact">
                    <div className="input-fields">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone (Optional)"/>
                    </div>
                    <div className="msg">
                        <textarea placeholder="Message"/>
                    </div>
                    <div>
                        <button className="form-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);