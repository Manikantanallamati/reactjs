import { useState } from "react";
import './App.css';

function Hooks(){
    const [arr,setArr]=useState(['apple','banana','carrot','dragonfruit'])
    const[fruitname,setFruitname]=useState('')
    const Filterfruits=()=>{
        let filteredarray = arr.filter((ele)=>{
            return (ele=== fruitname)
        })
        if(filteredarray.length===0){
            setArr(['apple','banana','carrot','dragonfruit'])
        }
        else{
            setArr(filteredarray)
        }
    }
    return(
        <div>
            <h1>Hooks in ReactJS</h1>
            <input type="text" onChange={(e)=> setFruitname(e.target.value)}/>
            <p>the name is :- {fruitname}</p>
            <button onClick={Filterfruits}>check fruit</button>
            <br/>
            <ul style={{'display':'inline-block'}}>
                {
                    arr.map((ele,i)=>{
                        return (<li key={i}>{ele}</li>)
                    })
                }
            </ul>

        </div>
    )
}

export default Hooks;