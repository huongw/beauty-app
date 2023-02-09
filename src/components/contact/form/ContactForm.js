import './form.css'

function ContactForm(props) {
  const {name, email, message, onEmailChange, onNameChange, onMessageChange, onSubmit, button, isLoading} = props;
  console.log(isLoading)

  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="Name" required 
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
      <input type="email" id="email" required 
        value={email}
        onChange={onEmailChange}
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
        onChange={onMessageChange}
      ></textarea>
      <button type="submit" disabled={isLoading}>{button}</button>
    </form>
  )
}

export default ContactForm;
