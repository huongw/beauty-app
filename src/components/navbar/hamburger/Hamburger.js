import './hamburger.css';

function Hamburger(props) {

  return (
    <div className={props.burgerClass} onClick={props.openMenuHandler}>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  )
}

export default Hamburger