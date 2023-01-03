import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ imageUrl, id, price }) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={imageUrl} alt="product" />
                <Link to={`product/${id}`}>
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Popular Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            ${price}
                        </div>
                    </div>
                </Link>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                </div>
            </div>
        </div>
    )
}
