import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './styles/Contact.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


function ContactForm() {
  const key = process.env.REACT_APP_API_KEY;
  const [state, handleSubmit] = useForm(key);

  if (state.succeeded) {
      return <p className={styles.successMessage}>Thanks for reaching out! We'll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
          disabled={state.submitting}
        />
        <ValidationError
          prefix="Full Name"
          field="fullname"
          errors={state.errors}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={state.submitting}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          disabled={state.submitting}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className={styles.submitButton}>
        Send
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div className={styles.contactBack}>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.contactContainer}>
          <ContactForm />
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <FaPhone className={styles.icon} />
              <p>+91 9392781298</p>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} />
              <p>devivaraprasadreddi29@gmail.com</p>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <p>Vizianagaram, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
