import { useState } from 'react';
import Popup from './Popup';

import GalleryList from "./GalleryList";
import './gallery.css';
import flower from '../../images/flower.png';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState({});

  function handleShowModal(imgSrc, alt) {
    setShowModal(!showModal)
    setDetails({...details, imgSrc, alt})
  }

  return (
    <div className="gallery container">
      <h1>
        gallery
        <img className="flower" src={flower} alt="" />
      </h1>
      <p className="gallery-txt">
        *View our hand painted nail art designed by our very own talented
        nail artist Whitney. All products are used with our vegan and cruelty-free
        nail polishes by Luxio.
      </p>
      <GalleryList handleShowModal={handleShowModal}/>

      {showModal && <Popup details={details} onClick={() => setShowModal(!showModal)}/>}
    </div>

  );
}

export default Gallery;