function GalleryListItem(props) {
  const { src, alt } = props;

  return (
    <img src={src} alt={alt} />
  );
}

export default GalleryListItem;