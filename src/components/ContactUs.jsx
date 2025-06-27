import React from 'react';
import '../styles/ContactUs.css'; // Optional: for ContactUs-specific styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>CONTECT US</h1>
      <p>Have questions or feedback? Reach out to us!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@kingscricket.com</p>
        <p><strong>Phone:</strong> +91 78599 49230</p>
        <p><strong>Address:</strong> 125 Cricket Lane, Nikol, Gujarat, India</p>
      </div>

      <form className="contact-form">
        <h2>Send us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;