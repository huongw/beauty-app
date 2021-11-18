function GalleryListItem(props) {
  const { src, alt } = props;

  return (
    <div className="img-container">
      <img src={src} alt={alt} />
    </div>
  );
}

export default GalleryListItem;