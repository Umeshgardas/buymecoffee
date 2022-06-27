import React from 'react'


function Navbar() {
    return (
        <div className='navbar-top'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light rounded-pill p-2 mt-3 ">
                    <div className="container">
                        <a className="navbar-brand " href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold me-3" aria-current="page" href="#">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#">Explore creators</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-light me-2 rounded-pill " type="submit">Log in</button>
                                <button className="btn btn-warning rounded-pill fw-bold " type="submit">Sign up</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar