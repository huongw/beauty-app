import golden_hour from '../../../images/golden-hour.jpg';
import tan_girl from '../../../images/tan-girl.jpg';
import './about.css';

function About() {

  return (
    <section className="intro-section">
      <div className="intro-wrapper">
        <div className="img-container">
          <img
            className="large-img"
            src={golden_hour}
            alt=""
          />
          <img
            className="small-img"
            src={tan_girl}
            alt=""
          />
        </div>
        <div className="intro-txt">
          <h2>Meet<br />Luna Beaute</h2>
          <p>
            Luna Beaute Spa is the #1 best vegan and organic spa in Montreal, Quebec.
            It was inspired by the beauty of the world and the strong women in our day-to-day
            lives. Our company strives on protecting our animals by using 100% vegan and
            cruelty-free based products to fit your every skin, nails, and lash needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
