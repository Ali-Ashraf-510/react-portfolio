// src/routes/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // State to manage form data, submission status, and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.subject) newErrors.subject = 'Please select a topic.';
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/myzpnwee', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Information and Form">
      <div className="container">
        <header className="section-header text-center mb-5">
          <h2 className="section-title gradient-text">Let's Connect</h2>
          <p className="section-subtitle">Ready to collaborate on exciting AI projects and opportunities</p>
        </header>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-7">
            <div className="glass-card contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label"><i className="fas fa-user"></i> Full Name</label>
                  <input type="text" id="name" name="name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                  {errors.name && <div className="form-feedback">{errors.name}</div>}
                </div>
                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label"><i className="fas fa-envelope"></i> Email Address</label>
                  <input type="email" id="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
                  {errors.email && <div className="form-feedback">{errors.email}</div>}
                </div>
                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label"><i className="fas fa-tag"></i> Subject</label>
                  <select id="subject" name="subject" className={`form-control ${errors.subject ? 'is-invalid' : ''}`} value={formData.subject} onChange={handleChange} required>
                    <option value="">Select a topic</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="opportunity">Job Opportunity</option>
                    <option value="consultation">AI Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <div className="form-feedback">{errors.subject}</div>}
                </div>
                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label"><i className="fas fa-comment-dots"></i> Your Message</label>
                  <textarea id="message" name="message" rows="5" className={`form-control ${errors.message ? 'is-invalid' : ''}`} value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..."></textarea>
                  {errors.message && <div className="form-feedback">{errors.message}</div>}
                </div>
                
                <button type="submit" className={`btn-primary-gradient btn-submit ${status === 'loading' ? 'loading' : ''}`} disabled={status === 'loading'}>
                  <span className="btn-text">Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                  <div className="btn-loader"><i className="fas fa-spinner fa-spin"></i></div>
                </button>
                {status === 'success' && <div style={{ color: 'var(--color-accent)', marginTop: '1rem' }}>Message sent successfully!</div>}
                {status === 'error' && <div style={{ color: '#ef4444', marginTop: '1rem' }}>Failed to send message. Please try again.</div>}
              </form>
            </div>
          </div>
          <div className="col-lg-5">
             <div className="glass-card contact-info-card h-100">
               <div className="contact-info">
                 <h3 className="contact-title gradient-text">Get in Touch</h3>
                 <p className="contact-intro">Let's discuss how we can bring your AI vision to life.</p>
                 <div className="contact-details">
                    <div className="contact-item"><div className="contact-icon"><i className="fas fa-envelope"></i></div><div className="contact-content"><h4>Email</h4><a href="mailto:aliabofooda1234@gmail.com" className="contact-link">aliabofooda1234@gmail.com</a></div></div>
                    <div className="contact-item"><div className="contact-icon"><i className="fas fa-clock"></i></div><div className="contact-content"><h4>Response Time</h4><span>Usually within 24 hours</span></div></div>
                    <div className="contact-item"><div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div><div className="contact-content"><h4>Location</h4><span>Egypt (Remote Available)</span></div></div>
                 </div>
                 <div className="social-links">
                   <h4 className="social-title">Connect With Me</h4>
                   <div className="social-buttons">
                      <a href="https://www.linkedin.com/in/ali-ashraf-8b619b22a" target="_blank" rel="noopener noreferrer" className="social-link linkedin"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a>
                      <a href="https://github.com/Ali-Ashraf-510" target="_blank" rel="noopener noreferrer" className="social-link github"><i className="fab fa-github"></i><span>GitHub</span></a>
                      <a href="mailto:aliabofooda1234@gmail.com" className="social-link email"><i className="fas fa-envelope"></i><span>Email</span></a>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;