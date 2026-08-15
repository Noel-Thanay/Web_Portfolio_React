import ContactForm from '../components/ContactForm.jsx';

function ContactPage() {
  return (
    <section className="content-section contact-section">
      <div className="section-heading">
        <p className="section-label">Contact</p>
        <h2>Let’s connect</h2>
      </div>
      <div className="contact-grid">
        <article>
          <p>
            I’m open to collaboration, internships, and development opportunities where I can contribute
            and keep learning.
          </p>
          <ul className="contact-list">
            <li>Email: dn24csb0a20@student.nitw.ac.in</li>
            <li>Location: Warangal, India</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/noelthanay" target="_blank" rel="noreferrer">linkedin.com/in/noelthanay</a></li>
          </ul>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
