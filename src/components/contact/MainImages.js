import img1 from './images/girl-sky.jpg';
import img2 from './images/sunflowers.jpg';

function MainImages() {
  return (
    <div className="img-container">
      <img src={img2} alt="" />
      <img className="girl-sky" src={img1} alt="" />
    </div>
  )
}

export default MainImages;
