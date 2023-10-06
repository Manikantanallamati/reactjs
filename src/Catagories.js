import { useEffect,useState } from "react";
import axios from "axios";
function Catagories(){
    const [data,setData] = useState([])
    const api = 'https://fakestoreapi.com/products/categories';
    useEffect(()=>{
        getProductlist()
    })
    const getProductlist = () =>{
        axios.get(api).then((response)=>{
            setData(response.data)
        });
    }
    useEffect(()=>{
        getProductlist()
    })
    return (
        <>
           <h1>category list</h1>
           {
            data.map((ele)=>{
              return(
                <p>{ele}</p>
                )
             })
            }
        </>
    )
}
export default Catagories;