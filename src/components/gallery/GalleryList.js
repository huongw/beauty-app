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
    <>
      {images}
    </>
  );
}

export default GalleryList;