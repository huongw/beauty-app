import './form.css'

function ContactForm(props) {
  const {name, email, message, onChangeEmail, onChangeName, onChangeMessage, onSubmit, button} = props;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Name">Name:</label>
      <input type="text" id="Name" required 
        value={name}
        onChange={onChangeName}
      />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required 
        value={email}
        onChange={onChangeEmail}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
        value={message}
        onChange={onChangeMessage}
      ></textarea>
      <button type="submit">{button}</button>
    </form>
  )
}

export default ContactForm;
