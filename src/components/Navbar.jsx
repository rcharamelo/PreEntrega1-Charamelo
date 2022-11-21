import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand titleLogo" href="#">CORINTIO'S 📷</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Catálogo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Contacto</a>
                                </li>
                            </ul>
                            <div class="d-flex" role="search">
                                <CartWidget/>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            )
}

export default Navbar;