import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = (nextData = formData) => {
    const nextErrors = {};

    if (!nextData.name.trim()) {
      nextErrors.name = 'Name is required';
    }

    if (!nextData.email.trim() || !nextData.email.includes('@')) {
      nextErrors.email = 'Valid email is required';
    }

    if (!nextData.message.trim()) {
      nextErrors.message = 'Message is required';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);
    setErrors(validate(nextData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      alert('Message prepared to send!');
    }
  };

  const isDisabled = Object.keys(validate()).length > 0;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
        {errors.email && <small className="error-text">{errors.email}</small>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)}></textarea>
        {errors.message && <small className="error-text">{errors.message}</small>}
      </div>
      <button type="submit" className="button" disabled={isDisabled}>Send Message</button>
    </form>
  );
}

export default ContactForm;
