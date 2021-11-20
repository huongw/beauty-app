import './preloader.css';
import { useEffect, useState } from 'react';

function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => (
      setVisible(!visible)
    ), 1500);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="preloader-bg" style={!visible ? { opacity: '0', visibility: 'hidden' } : null}>
      <span className="loader">LB</span>
    </div>
  )
}

export default Preloader