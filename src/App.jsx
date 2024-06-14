
import './App.css';
import { Routes, Route} from "react-router-dom";
import Gallery from "./Components/Gallery/Gallery";
import Start from "./Components/Start/Start";




export default function App ()  {


    return (
    
      <>

      <Routes>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/" element={<Start/>}></Route>
   

      </Routes>
        
      </>
    )
}
