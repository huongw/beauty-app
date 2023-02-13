import { useNavigate } from 'react-router-dom';
import "./Button.css";

export default function Button(props) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(props.navigateToPage);
  };

  return (
    <button onClick={navigateToPage} className="navigation">View Our {props.name}</button>
  )
}