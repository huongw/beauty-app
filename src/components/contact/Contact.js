import { useState } from "react";
import axios from "axios";

import ContactInfo from "./ContactInfo";
import ContactForm from "./form/ContactForm";
import Confirm from "./Confirm";

import MainText from "./MainText";
import MainImages from "./MainImages";
import './contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [btnName, setBtnName] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnName("Sending...")
    axios.post("/", {name, email, message})
    .then(res => {
      setResponse(res.data.message)
    })
    .catch(err => console.log("error sending email", err))
  }

  return (
    <section className="contact">
      <section className="contact-container">
        <MainImages />
        <MainText />
      </section>

      <section className="contact-info">
        <ContactInfo />
      </section>
      <div className="form-container">
      {response ? <Confirm message={response}/> : <ContactForm button={btnName} name={name} email={email} message={message} onSubmit={handleSubmit} onChangeEmail={e => setEmail(e.target.value)} onChangeName={e => setName(e.target.value)} onChangeMessage={e => setMessage(e.target.value)}/>}
      </div>
    </section>
  )
}

export default Contact;
