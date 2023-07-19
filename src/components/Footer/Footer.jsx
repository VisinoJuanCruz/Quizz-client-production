
import "./footer.css"
 


function Footer (){
    return(
      <div className="footer">
       {/*} <nav className="navbar">*/}
          <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/visinojuancruz/"> <i className="fa-brands fa-linkedin"></i> Linkedin </a>
          <a className="footer-link" target="_blank" href="https://github.com/VisinoJuanCruz">
            <i className="fa-brands fa-github"></i> Github </a>
          <a className="footer-link" target="_blank" href="mailto:visinodeveloper@gmail.com?Subject=Quiero%20que%20trabajemos%20juntos"> 
          <i className="fa-solid fa-envelope"></i> Contact me! </a>
      {/*   <div className=" navbar navbar-expand-lg footer-menu">
            <Link className="footer-button nav-item nav-link" to="/add-question"> Agregar pregunta</Link>
            <Link className="footer-button nav-item nav-link" to="/add-theme"> Agregar tema</Link>
          </div>
        </nav>*/}
      </div>
    )};





export default Footer;