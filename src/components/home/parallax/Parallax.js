import './parallax.css'
import { Link } from 'react-router-dom'

function Parallax() {
  return (
    <section className="parallax">
      <p>
        We are a vegan and cruelty-free based company that strives to
        provide the best luxurious nails in Montreal.
      </p>
      <Link to="/gallery">
        Our Gallery
      </Link>
    </section>
  )
}

export default Parallax