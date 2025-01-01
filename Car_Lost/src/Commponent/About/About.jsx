import './About.css';
import Add from './../Images/Home/Add.jpg'
import Recent from './../Images/Home/Recent.jpeg'
import Update from './../Images/Home/Up2.png'
<<<<<<< Updated upstream
function About(){
    return(
    <body className='about'>
=======
import Navi from './../Navigation/navi'

function About(){
    return(
    <>
    <Navi/>
    <div className='about'>
        
>>>>>>> Stashed changes
        <div className='aboutmain'>
            <h1><ins><b>WHAT WE OFFER</b></ins></h1>
            <p><b>WELCOME TO OUR CAR FINDING SYSTEM! WE OFFER A RELIABLE PLATFOAM FOR USERS TO</b></p>
            <p><b>REGISTER THEIR VEHICLES, MAINTAIN RECORDS,  AND QUIKLY UPDATE THEIR STATUS IN </b></p>
            <p><b>CASE OF LOSS OR THEFT. OUR SYSTEM ENSURES COMMUNITY COLLABORATION BY</b></p>
            <p><b>NOTIFYING OTHER USERS TO KEEP AN EYE OUT FOR STOLEN VEHICLES, ENHANCING THE</b></p>
            <p><b>CHANCES OF RECOVERY. TOGETHER , WE MAKE FINDING LOST VEHICLES EASIER AND</b></p>
            <p><b>FASTER</b></p>
        </div>
        <div className='icons'>
           <div className='icons1'>
            <img src={Add}></img>
            <a href='#'><p><b>ADD YOUR VEHICLE</b></p></a>
            </div> 
            <div className='icons2'>
            <img src={Update}></img>
            <a href='#'><p><b>UPDATE VEHICLE STATUS</b></p></a>
            </div>
            <div className='icons3'>
            <img src={Recent}></img>
            <a href='#'><p><b>RECENT ENTRIES</b></p></a>
            </div>  
        </div>
        
    </body>  

        
    );

}

export default About
