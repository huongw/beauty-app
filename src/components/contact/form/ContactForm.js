import './form.css'

function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" required />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;
