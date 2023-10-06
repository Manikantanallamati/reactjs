import './App.css';
function Student(props){
    return(
        <div>
            <h1>my name is {props.name} {props.rollno}</h1>
        </div>
    )
}
export default Student;


{/*import './App.css';
import {Component} from "react";
class Class extends Component{
    render(){
        return(
        <div>
            <h1>hi this is {name} created by class element</h1>
        </div>)
    }
}
export default Class;*/}