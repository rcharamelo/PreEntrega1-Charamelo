import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand titleLogo" href="#">CORINTIO'S 📷</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Catálogo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Contacto</a>
                                </li>
                            </ul>
                            <div className="d-flex" role="search">
                                <CartWidget/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            )
}

export default Navbar;