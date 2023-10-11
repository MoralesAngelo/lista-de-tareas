import { Link } from "react-router-dom"


export const Menu = () => {
  return <nav>
    <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/services'>Services</Link></li>
  </ul>
    
    </nav>
}
