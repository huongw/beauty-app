import ContactInfo from "./ContactInfo";
import ContactForm from "./form/ContactForm";

import MainText from "./MainText";
import MainImages from "./MainImages";
import './contact.css';

function Contact() {
  return (
    <section className="contact">
      <section className="contact-container">
        <MainImages />
        <MainText />
      </section>

      <section className="contact-info">
        <ContactInfo />
      </section>
      <ContactForm />
    </section>
  )
}

export default Contact;
