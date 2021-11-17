
function FooterLinks(props) {
  const { data, className } = props;

  const footerLinks = data.map((name, index) => {
    return (
      <li href="#" key={index}>
        <a href="">{name}</a>
      </li>
    )
  })

  return (
    <ul className={className}>
      {footerLinks}
    </ul>
  );
}

export default FooterLinks;
