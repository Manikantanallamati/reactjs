//import logo from './logo.svg';
import './App.css';
import pic from './img-a.webp';
function Home() {
  //internal_styles
  let is={
    background:'green',
    color:'yellow',
    marginTop:'100px'
  }
  return (
    <div>
      <h1  style={is}>home page</h1>
      <img src={pic} alt='no profile' height="200px"/>
    </div>
  );
}

export default Home;