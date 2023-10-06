import {useEffect,useState } from "react";
import axios from "axios";
import './Newproduct.css';

function Product2(){
    const [data,setData] = useState([])
    //const [cnt,setCnt] = useState(0) 
    const api = 'https://fakestoreapi.com/products/category/jewelery';
    useEffect(()=>{
        getProductlist()
    },[]) 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            setData(response.data);            
        });
    }
    return (
        <>
            
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                            <img src={ele.image} alt=''/>
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default Product2;