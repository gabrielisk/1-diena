import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <h1>Svetainė</h1>
        <ul>
            <li><a href="#">Pagrindinis</a></li>
            <li><a href="#">Paslaugos</a></li>
            <li><a href="#">Apie mus</a></li>
            <li><a href="#">Kontaktai</a></li>
        </ul>
    </div>
  )
}

export default Navbar