import './Navbar.css'

function Navbar() {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="#">AIOS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* Button only displays on mobile */}
                    <div class="  collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul class=" navbar-links navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <a class="nav-link" href="#">
                                <div class=" search-col">
                        <input type="search"
                        placeholder="Search products"
                        />
                        <i class="fa fa-search"/>
                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <button><span className='l'>L</span>ogin</button>
                                </a>
                            </li>
                            <li class="nav-item .cart">
                                <a class="nav-link" href="#">
                                <i class="fa fa-shopping-cart cart" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
