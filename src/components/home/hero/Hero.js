import './hero.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Hero() {
  const [messages, setMessages] = useState([]);

  const update = () => {
    console.log("clicked")
    axios.get("/new")
    .then(res => {
      console.log("here")
      setMessages(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const allMessages = messages.map(message => {
    return (
      <div key={message.name}>Hi my name is {message.name}, and my age is {message.age}</div>
    )
  })
  
  return (
    <section className="hero">
      <div className="hero_bg">
        <div className="welcome">
          <h2 id="slogan">
            Awaken your inner <br />goddess
          </h2>
          {messages.length > 0 ? <div>{allMessages}</div> : <div onClick={update}>Click me</div>}
        </div>
      </div>
    </section>
  );
}

export default Hero;
