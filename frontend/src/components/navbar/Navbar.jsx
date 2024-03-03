import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary container">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">AIOS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* Button only displays on mobile */}
                    <div class="  collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbar-links navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacts</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
