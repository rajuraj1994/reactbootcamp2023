import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={data.image} className="card-img-top" alt={data.title} />
                    <div className="card-body">
                        <h5 className="card-title">{data.title.slice(0,20)}</h5>
                        <h5>${data.price}</h5>
                        <Link to={`/productdetails/${data.id}`} className='btn btn-success'>View Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card