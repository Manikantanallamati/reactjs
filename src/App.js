//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Menu from './Menu';
//import Student from './Student'; 
import Table from './Table';
import Counter from './Counter';
import Hooks from './hooks';
import Newproduct from './Newproduct';
import Product2 from './product2';
import Catagories from './Catagories';
import Choose from './choose';
//import Trainee from './Trainee';
//import Events from './Events';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu   style={{background:'black',color:'orange'}}/>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Service' element={<Service/>}/>
        <Route path='Table' element={<Table/>}/>
        <Route path='Counter' element={<Counter/>}/>
        <Route path='Hook' element={<Hooks/>}/>
        <Route path='NewProduct' element={<Newproduct/>}/>
        <Route path='Product2' element={<Product2/>}/>
        <Route path='Catagories' element={<Catagories/>}/>
        <Route path='Choose' element={<Choose/>}/>
        {/*<Route path='Events' element={<Events/>}/>*/}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;