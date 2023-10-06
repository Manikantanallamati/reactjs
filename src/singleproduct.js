import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
function Singleproduct() {
    const {id} = useParams();
    const [data,setData] = useState([]) // const data=[]
    
    const api = `https://fakestoreapi.com/products/${id}` 
    useEffect(()=>{
        getProductlist()
    },[])
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            setData(response.data);            
        }); 
    }
  return (
    <div className="card">
                            <img src={data.image} alt=''/>
                            <p>{data.title}</p>
                            <p>{data.price}</p>
                            <p>{data.category}</p>
                        </div>
  )
}

export default Singleproduct;