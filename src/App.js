import {useState} from "react";
import './App.css';
import {
    Button, Card,
    CardActionArea, CardContent,
    CardMedia,
    Divider,
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon,
    Stack
} from "@mui/material";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Grid from "@mui/material/Grid";
import Gride from "./Gride";
import Mui from "./mui";
import Typography from "@mui/material/Typography";
import SummaryForm from "./pages/summary/SummaryForm";



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
           <Card style={{justifyContent:'center',alignItems:'center',display:'inline-flex',marginTop:'3rem'}} sx={{ maxWidth: 345 }}>
               <CardActionArea>
                   <CardContent>
                       <div>
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
                   </CardContent>
               </CardActionArea>
           </Card>
           <br/>
           <br/>
           <Box
               sx={{
                   display: 'flex',
                   flexDirection: 'column',
               }}
           >

               <Box
                   style={{backgroundColor:'deeppink'}}
                   component="footer"
                   sx={{
                       py: 5,
                       px: 5,
                       mt: 'auto',
                       backgroundColor: (theme) =>
                           theme.palette.mode === 'light'
                               ? theme.palette.grey[200]
                               : theme.palette.grey[800],
                   }}
               >
                   <SummaryForm/>
               </Box>
           </Box>
          <Footer/>
       </div>
    </div>
  );
}

export default App;
