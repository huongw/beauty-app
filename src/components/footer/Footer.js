import formData from '../../data/footerData';
import FooterLinks from './FooterLinks';
import './footer.css';

function Footer() {
  return (
    <footer>
      <h3 className="footer-title">Luna Beaute</h3>
      <div className="footer-flex-wrapper">
        <FooterLinks className="links" data={formData.company} />
        <FooterLinks className="links social-links" data={formData.social} />
        <FooterLinks className="links customer-links" data={formData.customer} />
      </div>
      <div className="newsletter">
        <h4>Want to Receive Some Discount Goodies?</h4>
        <form>
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="copyright">
        <span>&#169; 2021 by Luna Beaute</span>
      </div>
    </footer>
  );
}

export default Footer;
