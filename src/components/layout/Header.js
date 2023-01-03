import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../../features/authSlice';

export default function Header() {
    const dispatch = useDispatch()
    const { userToken } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    let location = useLocation();

    function handleLogout(event) {
        event.preventDefault()
        dispatch(logout())
        navigate('/login', { replace: true })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            {
                                userToken !== null ? <li className="nav-item" >
                                    <Link to={'/products'} className={location.pathname === '/products' ? "nav-link active" : "nav-link"} >Products</Link>
                                </li> : null
                            }
                        </ul>
                        <form className="d-flex">
                            {
                                (!userToken) ?
                                    <Link to={'/login'} className="btn btn-outline-success" type="submit">Login</Link>
                                    : <button onClick={handleLogout} className="btn btn-outline-success" type="submit">Logout</button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
