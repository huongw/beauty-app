function GalleryListItem(props) {
  const { src, alt, handleShowModal } = props;

  return (
    <div className="img-container" onClick={() => handleShowModal(src, alt)}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default GalleryListItem;