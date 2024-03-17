import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
const Header = () => {

    const [btnReact,setbtnReact]=useState('Login')

    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} />
            </div>
            <div className='head-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Cart</li>
                    <li> <button className="login-btn" onClick={()=>{
                        btnReact === 'Login'? setbtnReact('Logout'):setbtnReact('Login')
                        
                    }}>{btnReact}</button></li>
                </ul>
            </div>



        </div>
    )
}


export default Header;