import { Link } from "react-router-dom";

function Menu(){
    return(
        <div style={{background:'black',color:'orange',padding:'20px'}}>
        <Link to='/Home'style={{background:'black',color:'orange',padding:'20px'}}>Home</Link> |
        <Link to='/About'style={{background:'black',color:'orange',padding:'20px'}}>About</Link>|
        <Link to='/Service'style={{background:'black',color:'orange',padding:'20px'}}>service</Link>|
        <Link to='/Trainee'style={{background:'black',color:'orange',padding:'20px'}}>Trainee</Link>|
        <Link to='/Table'style={{background:'black',color:'orange',padding:'20px'}}>Table</Link>|
        <Link to='/Events'style={{background:'black',color:'orange',padding:'20px'}}>Events</Link>|
        <Link to='/Counter'style={{background:'black',color:'orange',padding:'20px'}}>Counter</Link>|
        <Link to='/Hook'style={{background:'black',color:'orange',padding:'20px'}}>Hooks</Link>|
        <Link to='/Newproduct'style={{background:'black',color:'orange',padding:'20px'}}>NewProduct</Link>|
        <Link to='/Product2'style={{background:'black',color:'orange',padding:'20px'}}>Product2</Link>|
        <Link to='/Catagories'style={{background:'black',color:'orange',padding:'20px'}}>Catagories</Link>|
        <Link to='/choose'style={{background:'black',color:'orange',padding:'20px'}}>Choice</Link>|
        </div>
    )
}
export default Menu;