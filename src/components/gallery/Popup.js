export default function Popup(props) {
  const {details} = props;

  return (
    <div className="popup-img" onClick={props.onClick}>
      <img src={details.imgSrc} alt={details.alt} />
    </div>
  )
}