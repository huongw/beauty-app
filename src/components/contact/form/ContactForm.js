import './form.css'

function ContactForm(props) {
  const {name, email, message, onChangeEmail, onChangeName, onChangeMessage, onSubmit, button} = props;

  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="Name" required 
        value={name}
        onChange={onChangeName}
        placeholder="Name"
      />
      <input type="email" id="email" required 
        value={email}
        onChange={onChangeEmail}
        placeholder="Email"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write us a message"
        required
        value={message}
        onChange={onChangeMessage}
      ></textarea>
      <button type="submit">{button}</button>
    </form>
  )
}

export default ContactForm;
