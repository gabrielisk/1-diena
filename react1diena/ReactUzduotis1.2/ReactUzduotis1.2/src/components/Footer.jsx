import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="contacts">
                <strong>+37061111111</strong>
                <strong>lorem@svetaine.com</strong>
            </div>
            <div className="footer-navbar">
                <ul>
                    <li><a href="#">Pagrindinis</a></li>
                    <li><a href="#">Paslaugos</a></li>
                    <li><a href="#">Apie mus</a></li>
                    <li><a href="#">Kontaktai</a></li>
                </ul>
            </div>
            <div className="socials">
                <ul>
               <li><strong>Facebook</strong></li>
               <li><strong>Instagram</strong></li>
               <li><strong>X</strong></li>  
               <li><strong>Linkedin</strong></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer