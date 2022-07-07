import {useState} from "react";
import './App.css';
import {Button} from "@mui/material";
import Appbar from "./Appbar";
import Grid from "./Gride";
import Footer from "./Footer";



function App() {
  const [buttonColor,setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red'? 'blue':'red' ;

  return (
    <div className="App">
       <div>
           <Appbar/>
          <div style={{alignItems:'center',display:'flex',justifyContent:'center',placeItems:'center'}}>
              <Button onClick={()=>setButtonColor(newButtonColor)} style={{backgroundColor:buttonColor}}  variant="contained">Change to {newButtonColor}</Button>
              <input  type="checkbox"/>
          </div>
          <Footer/>
       </div>
    </div>
  );
}

export default App;
