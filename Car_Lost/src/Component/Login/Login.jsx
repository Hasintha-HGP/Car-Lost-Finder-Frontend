import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from "../Service/UserService";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import Logimg from '../Images/Home/homeorg.jpg';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            navigate('/MyProfile'); 
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const userData = await UserService.login(email, password);
            
            if (userData.token) {
                
                if (rememberMe) {
                    localStorage.setItem('rememberMe', true);
                }

                navigate('/HomePage'); 
            } else {
                setError(userData.error || "Invalid credentials");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.message || "An error occurred. Please try again.");
            
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <>
            <div className='main1'>
                <img className="LogImage" alt="bgimage" src={Logimg} />
                <div className='main'>
                    <div className='form-login'>
                        <form className='form' onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            {error && <p className='error-message'>{error}</p>}
                            <div className='inputbox'>
                                <input 
                                    type='email' 
                                    placeholder='Email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                />
                                <FaUser className='ico' />
                            </div>
                            <div className='inputbox'>
                                <input 
                                    type='password' 
                                    placeholder='Password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                />
                                <FaLock className='ico' />
                            </div>
                            <div className='remember'>
                                <label>
                                    <input 
                                        type='checkbox' 
                                        checked={rememberMe} 
                                        onChange={() => setRememberMe(!rememberMe)} 
                                    />
                                    Remember me
                                </label>
                            </div>
                            <button type='submit'>Login</button>
                            <div className='sign-up'>
                                <p>Don't have an account? <a href='/register'>Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
