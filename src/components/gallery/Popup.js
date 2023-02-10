export default function Popup(props) {
  const {details} = props;

  return (
    <div className="popup-img">
      <button className="popup-close" onClick={props.onClick}>X</button>
      <img src={details.imgSrc} alt={details.alt} />
    </div>
  )
}