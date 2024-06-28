import "./App.css";
import savingimage from './savingimage.jpg'
import m1 from './m1.jpg'
import m2 from './m2.jpg'
import m3 from './m3.jpg'
import m4 from './m4.jpeg'
import m5 from './m5.jpeg'
import m6 from './m6.jpeg'
import imageshh from './imageshh.jpg'
import nb from './nb.png';
import ndsf from './ndsf.png'
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Hospitals from "./Hospitals";
import Agencies from "./Agencies";
import Defense from "./Defense";
// import ChatbotComponent from "./Chatbot";
import Geek from "./Geek";
// import SimpleMap from "./SimpleMap";
// import MapContainer from "./MapContainer";
// import MarkersMap from "./SimpleMap";


function Home() {
  return (
    <div className="">

      <div className="flex justify-center items-center gap-10  bg-violet-400">
        <Link to="/"><h1 className=" text-3xl font-extrabold mx-2 my-2 px-1 py-1 hover:scale-110 transition-all ease-in">Home</h1></Link>
        <Link to="/donate"><h1 className=" text-3xl font-extrabold mx-2 my-2 px-1 py-1 hover:scale-110 transition-all ease-in">Donate</h1></Link>
        <Link to="/contact"><h1 className=" text-3xl font-extrabold mx-2 my-2 px-1 py-1 hover:scale-110 transition-all ease-in">Contact</h1></Link>
        
        
        
        {/* <div className="flex-initial"> */}
         

        {/* <Link to="/login"><button className="bg-yellow-500  font-extrabold mx-2 my-2 px-1 py-1 rounded-md hover:scale-105 transition-all ease-in">Login</button></Link>
        <Link to="/signup"><button className="bg-green-300  font-extrabold mx-2 my-2 px-1 py-1 rounded-md hover:scale-105 transition-all ease-in">Signup</button></Link>
         */}
        {/* <Routes>
          <Route path="/" element={<App></App>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes> */}
        
        {/* </div> */}
        
      </div>
      {/* <div className=" bg-purple-800 h-2 w-full"></div> */}
      <div className="flex flex-row items-center">
        <Link to="/sos"><button className="font-extrabold text-2xl bg-orange-600 rounded-md hover:scale-125 px-4 py-2 mx-2 my-2 transition-all ease-in">SOS!</button></Link>
       <div className="flex ml-48 font-extrabold text-4xl text-orange-600">
        AWARENESS AND PREPAREDNESS FOR DISASTER
       </div>
      </div>
      {/* <div className=" bg-purple-800 h-2 w-full"></div> */}
      
      <div className="flex flex-col">

     <div className="flex flex-row gap-2 max-w-11/12">
       <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={savingimage}></img>
      <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={m1}></img>
      <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={m2}></img>
     </div>
     
     <div className="flex flex-row gap-2 max-w-11/12">
      <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={m3}></img>
      <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={m6}></img>
      <img className="rounded-md h-60 w-4/12 my-[-2] mb-4 hover:scale-110 transition-all ease-in" src={m5}></img>
     </div>

    </div>

    <Geek></Geek>
    {/* <div className="h-10"><SimpleMap></SimpleMap></div> */}
    
    {/* <ChatbotComponent></ChatbotComponent> */}
    {/* <MapContainer></MapContainer> */}
    {/* <MarkersMap></MarkersMap> */}
     <div className='flex space-x-96 bg-richblack-900 pb-32 h' id='mapping'>
                <iframe width="1300" height="600" frameborder="0" scrolling="no" src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=20.5937&lon=78.9629&zoom=5"></iframe>
            </div>


    <div className="bg-purple-800 h-2 w-full"></div>
    <br />
    <div className="text-4xl font-extrabold flex justify-center">WHAT IS DISASTER!! INTRODUCTION</div>
    <br />

      <div className="flex flex-row justify-center">
        {/* <iframe src=''
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        /> */}
        <iframe width="960" height="450" src="https://www.youtube.com/embed/9WIwlljva_s?si=GJ09BPpy8dAORu5Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br />

      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl font-extrabold flex flex-row justify-center">
        WHAT IS DISASTER MANAGEMENT!!
      </div>
      <br />

      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/BaWnRznp1AU?si=EYW-2H0SORlGT3_e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br />
      
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">WHAT IS NDRF!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/b-VG388kWGM?si=WtYUfqz_pkjr0loo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br />

      <br />
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">HOW NDRF HELPS PEOPLE!!</div>
      <br />
      <div className="flex flex-row justify-center"><iframe width="960" height="450" src="https://www.youtube.com/embed/AiM009ccvgw?si=wAC9COe0rN0YLlWF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      <br />
      
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">EQUIPMENTS USED BY NDRF!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/rJ6LJA4plnc?si=O6uv4uSFBTxCSAE7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br />
      
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">ROPE RESCUE TRAINING BY NDRF!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/fB76sdw2H9w?si=-9PovSVN5DPF2cI2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <br />

      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">NDRF TRAINING VIDEO AT IIT BOMBAY!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/y5W3jc_Hk4A?si=Jy7fZZpUGfZxmCYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br />
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">HOW TO SURVIVE A FLOOD!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/pi_nUPcQz_A?si=nB2WEVx3w2GTppWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br />
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">HOW TO SURVIVE AN EARTHQUAKE!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/hWSu4l1RxLg?si=WdGm4Y-2Z8HWHi_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br />
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">HOW TO SURVIVE A TORNADO!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/wcTdLnrxznM?si=WfjuEDXtsSAKYeND" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br />
      <div className="bg-purple-800 h-2 w-full"></div>
      <br />
      <div className="text-4xl flex flex-row justify-center font-extrabold">WAYS TO SURVIVE NATURAL DISASTERS!!</div>
      <br />
      <div className="flex flex-row justify-center">
        <iframe width="960" height="450" src="https://www.youtube.com/embed/OCjl6tp8dnw?si=PEvKNvQPjMZzFppo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <br />

      <div className="bg-purple-800 h-2 w-full"></div>

    <div className="flex flex-row justify-between">
        <Link to="https://ndmindia.mha.gov.in/contact-us"><img className="rounded-md h-48 my-2 hover:scale-105 transition-all ease-in delay-75" src={imageshh} ></img></Link>
        <Link to="https://www.ndrf.gov.in/contact-us"> <img className="rounded-md h-48 my-2 hover:scale-105 transition-all ease-in delay-75" src={ndsf}></img></Link>
        <Link to="/Contact"> <img className="rounded-md h-48 my-2 hover:scale-105 transition-all ease-in delay-75" src={nb}></img></Link>
      
     
     
    </div>

<br /><br />

      
    <div className="text-2xl font-extrabold flex flex-row justify-center">Email: support@gmail.com</div>
    <div className="text-2xl font-extrabold flex flex-row justify-center">HELP LINE NO: +12345..</div>
    
    

  <div className="bg-purple-800 h-2 w-full"></div>
    </div>
      
  );
}

export default Home;
