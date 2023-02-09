import { useState } from "react";
import axios from "axios";

import ContactInfo from "./ContactInfo";
import ContactForm from "./form/ContactForm";
import Confirm from "./Confirm";
import MapBox from "../map/MapBox";

import MainText from "./MainText";
import MainImages from "./MainImages";
import './contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [btnName, setBtnName] = useState("Submit Your Message");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)

    const data = {
      name: name[0].toUpperCase() + name.slice(1),
      email,
      message
    }
    
    setBtnName("Sending...");

    axios.post("/email", {...data})
    .then(res => {
      setResponse(res.data.message)
      setLoading(false)
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
      <div className="map-form-section">
      <div className="form-container">
      {response ? <Confirm message={response}/> : <ContactForm button={btnName} isLoading={loading} name={name} email={email} message={message} onSubmit={handleSubmit} onEmailChange={e => setEmail(e.target.value)} onNameChange={e => setName(e.target.value)} onMessageChange={e => setMessage(e.target.value)}/>}
      </div>
      <MapBox/>
      </div>
    </section>
  )
}

export default Contact;
