import {useState} from "react";
import './App.css';
import {Button, Divider, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack} from "@mui/material";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}
function App() {
  const [buttonColor,setButtonColor] = useState('red');
  const [disabled,setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red'? 'blue':'red' ;

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];


  return (
    <div className="App">
       <div>
          <Appbar/>
           <div style={{alignItems:'center',display:'flex',justifyContent:'center',placeItems:'center'}}>
               <Button
                   onClick={()=>setButtonColor(newButtonColor)}
                   style={{backgroundColor:disabled? 'gray' : buttonColor}}
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
           {/*<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>*/}
           {/*    <SpeedDial*/}
           {/*        ariaLabel="SpeedDial basic example"*/}
           {/*        sx={{ position: 'absolute', bottom: 16, right: 16 }}*/}
           {/*        icon={<SpeedDialIcon />}*/}
           {/*    >*/}
           {/*        {actions.map((action) => (*/}
           {/*            <SpeedDialAction*/}
           {/*                key={action.name}*/}
           {/*                icon={action.icon}*/}
           {/*                tooltipTitle={action.name}*/}
           {/*            />*/}
           {/*        ))}*/}
           {/*    </SpeedDial>*/}
           {/*</Box>*/}
          <Footer/>
       </div>
    </div>
  );
}

export default App;
