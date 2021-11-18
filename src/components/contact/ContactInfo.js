import contactData from '../../data/contactData';

function ContactInfo() {

  const available = contactData.available;
  const address = contactData.address;
  const inquiry = contactData.inquiry;

  return (
    <>
      <div>
        <h3>{available.title}</h3>
        <p>{available.days}<br />{available.hours}</p>
      </div>
      <div>
        <h3>{address.title}</h3>
        <p>{address.address}<br />{address.city}<br />{address.postalCode}</p>
      </div>
      <div>
        <h3>{inquiry.title}</h3>
        <p>{inquiry.email}</p>
      </div>
    </>
  )
}

export default ContactInfo;
