import "./App.css";
import savingimage from './savingimage.jpg'
import imageshh from './imageshh.jpg'
import nb from './nb.png';
import ndsf from './ndsf.png'
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css"
import Sos from "./Sos";
import Hospitals from "./Hospitals";
import Agencies from "./Agencies";
import Defense from "./Defense";
import Page from "./Page";
import Donate from "./Donate";
import Contact from "./Contact";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/sos" element={<Sos></Sos>}></Route>
          <Route path="/hospitals" element={<Hospitals></Hospitals>}></Route>
          <Route path="/Defense" element={<Defense></Defense>}></Route>
          <Route path="/Agencies" element={<Agencies></Agencies>}></Route>
          <Route path="/page" element={<Page></Page>}></Route>
          <Route path="/donate" element={<Donate></Donate>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        
        


    

      </div>
      
  );
}

export default App;
