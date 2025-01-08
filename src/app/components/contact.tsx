
import React from "react";


const Contact = () => {
    return (
        <div id="Contact">
            <section className="contact-section">
                <div className="contact-container">
                    {/* Left side: Map and Address */}
                    <div className="map-container">
                        <iframe
                            className="map-iframe"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9981700571193!2d67.06697943624025!3d25.00017813975158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3410013bc95bd%3A0xbd8bdbaa62fd1795!2sKala%20School%20Bus%20Stop!5e0!3m2!1sen!2s!4v1731240335408!5m2!1sen!2s"
                            style={{ filter: "contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="map-details">
                            <div className="address-section">
                                <h2 className="details-title">ADDRESS</h2>
                                <p>Kala School 5/D New Karachi</p>
                            </div>
                            <div className="contact-details">
                                <h2 className="details-title">EMAIL</h2>
                                <a href="mailto:abidanoor980@gmail.com" className="details-link">
                                    abidanoor980@gmail.com
                                </a>
                                <h2 className="details-title">PHONE</h2>
                                <p>03122688990</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="form-container">
                        <h2 className="form-title">Contact</h2>
                        <p className="form-subtitle">Feel free to contact me</p>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                defaultValue={""}
                            />
                        </div>
                        <button className="form-button">Send Message</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

