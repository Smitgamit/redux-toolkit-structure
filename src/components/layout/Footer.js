import React from 'react'

export default function Footer() {
    return (
        <footer className=" p-4 bg-dark text-light">
            <div className="d-lg-flex justify-content-between">
                <div>
                    <span>LOGO</span>
                </div>
                <div className="copyright">
                    <p>developed and maintained by test</p>
                </div>
                <div>
                    <ul className="d-flex gap-3 list-unstyled">
                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

{/* <div className="bg-dark text-light">
            <footer className="py-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-6 col-md-2">
                        Footer
                    </div>
                </div>
            </footer>
        </div> */}