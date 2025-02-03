import './Login.css'
import {FaUser , FaLock} from "react-icons/fa";
import Logimg from '../Images/Home/homeorg.jpg';
function Login(){
    return(
        <>
        <div className='main1'>
            <img className="LogImage" alt="bgimage" src={Logimg} />
        <div className='main'>
            <div className='form-login'>
                <form className='form' action=''>
                    <h1>Login</h1>
                    <div className='inputbox'>
                        <input type='email' placeholder='Email' required/>
                        <FaUser className='ico'/>
                    </div>
                    <div className='inputbox'>
                        <input type='password' placeholder='password' required/>
                        <FaLock className='ico'/>
                    </div>
                    <div className='remember'>
                        <label><input type='checkbox'/>Remember me</label>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='sign-up'>
                        <p>Dont't have an account?<a href='#'>Sign Up</a> </p>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    );
}
export default Login