import React,{useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'

const CardContainer = () => {
    const[products,setProducts]=useState([])
    const[limit,setLimit]=useState(8)

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    },[])

    const demo=()=>(
        setLimit(limit+4)
    )
    return (
        <>
            <div className='container-fluid'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products && products.slice(0,limit).map((item,i)=>{
                        return <Card key={i} data={item} />
                    })}
                    <div className='d-flex offset-md-5'>
                        <div className='col-5'>
                            <button className='btn btn-warning' onClick={demo}>Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardContainer