import { Link } from 'react-router-dom'
import "./header.css"
import brainImage from "../images/cerebro.png"
 
function Header (){
    return(
      <div className="header">       
          <Link className="header-button nav-item nav-link" to="/Quizz-client-production/"><p className="header-title"><img className="header-image img-fluid"src={brainImage}/>Tematica</p></Link>
      </div>
    )};

    export default Header;