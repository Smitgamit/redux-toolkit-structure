import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to={'/products'} className={location.pathname === '/products' ? "nav-link active" : "nav-link"} >Products</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to={'/login'} className="btn btn-outline-success" type="submit">Login</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}