import GalleryList from "./GalleryList";
import './gallery.css';

function Gallery() {
  return (
    <div className="gallery container">
      <h1>gallery</h1>
      <p className="gallery-txt">
        *View our hand painted nail art designed by our very own talented
        nail artist Whitney. All products are used with our vegan and cruelty-free
        nail polishes by Luxio.
      </p>
      <GalleryList />
    </div>

  );
}

export default Gallery;