import galleryData from '../../data/galleryData';
import GalleryListItem from './GalleryListItem';

function GalleryList(props) {

  const images = galleryData.map((image) => {
    return (
      <GalleryListItem
        key={image.id}
        src={image.src}
        alt={image.alt}
        handleShowModal={props.handleShowModal}
      />
    )
  })

  return (
    <div className="gallery-container">
      {images}
    </div>
  );
}

export default GalleryList;