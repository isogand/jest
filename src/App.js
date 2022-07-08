import {useState} from "react";
import './App.css';
import {Button} from "@mui/material";
import Appbar from "./Appbar";
import Footer from "./Footer";



function App() {
  const [buttonColor,setButtonColor] = useState('red');
  const [disabled,setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red'? 'blue':'red' ;

  return (
    <div className="App">
       <div>
           <Appbar/>

           <div style={{alignItems:'center',display:'flex',justifyContent:'center',placeItems:'center'}}>
               <Button
                   onClick={()=>setButtonColor(newButtonColor)}
                   style={{backgroundColor:buttonColor}}
                   variant="contained"
                   disabled={disabled}
               >
                   Change to {newButtonColor}
               </Button>
               <input
                   type="checkbox"
                   id="disable-button-checkbox"
                   defaultChecked={disabled}
                   aria-checked={disabled}
                   onChange={(e) => setDisabled(e.target.checked)} />
               <label htmlFor="disable-button-checkbox">Disable button</label>
           </div>
          <Footer/>
       </div>
    </div>
  );
}

export default App;
