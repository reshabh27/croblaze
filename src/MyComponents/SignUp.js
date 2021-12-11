import React from 'react'
import "./signup.css"
import { Link } from "react-router-dom";

import logo from "./logo.png";
import advertise from "./advertise.jpeg";
import instagram from "./instagram.png";
import fb from "./fb.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";

export const SignUp = () => {
	return (
		<div className='loginpage'>
			<div className='advertisementarea'>
				<img src={advertise} alt="advertisement" className='advertiseimage' />
				<div className='socialmediabox'>
						<div className='otherpages'>
							<Link to="/AboutUs" style={{color: "black",marginRight:'10px'}}>About</Link>
							<Link to="/Disclaimer" style={{color: "black",marginRight:'10px'}}>Disclaimer</Link>
							<Link to="/PrivacyAndPolicy" style={{color: "black"}}>Privacy Policy</Link>
						</div>
						<div className="login-follow">
							<span>Follow us on</span>
							<a href="https://facebook.com/croblaze" target="_blank" rel="noopener noreferrer"><img src={fb} alt="FB" style={{marginLeft:'5px',height:'30px',width:'30px'}}/></a>
							<a href="https://twitter.com/croblaze_india" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" style={{marginLeft:'5px',height:'30px',width:'30px'}}/></a>
							<a href="https://instagram.com/croblaze_india" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="insta" style={{marginLeft:'5px'}}/></a>
							<a href="https://aedin.com/company/croblaze" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" style={{marginLeft:'5px',height:'30px',width:'30px'}}/></a>
						</div>
				</div>

			</div>


			<div className='signuparea'>
				<a href="https://affectionate-bell-c85e7c.netlify.app//index.html">
					<img src={logo} alt="logo" className="logo" />
				</a>
				<hr className='hrtag' />
				<p className='head'>Sign Up</p>
				<form action="/action_page.php">
					<input type="text" className="name" placeholder='Your Name' /><br />
					<p className="comment">Please enter your Name</p><br />
					<input type="text" className="mobilenumber" placeholder='Mobile Number' /><br />
					<p className="comment">Please enter your Mobile Number</p><br />
					<input type="text" className="email" placeholder='Your Email' /><br />
					<p className="comment">Please enter your Email</p><br />
					<input type="text" className="password" placeholder='Password' /><br />
					<p className="comment">Please enter Password</p><br />
					<input type="text" className="confirmpassword" placeholder="Confirm Password" /><br />
					<p className="comment">Please enter your Password Again</p><br /><br />
					<button className='btn btn-login' style={{color:'white'}} ><b>Sign Up</b></button>
				</form>
				
				<br /><br />
				<p className="notregistered">Already have an account?</p>
				<br />
				<Link to="/login">
					<button className='btn btn-signup'>Log In</button>
				</Link>
				<Link to="/homepage">
					<button className='btn btn-signup'>Back to Home Page</button>
				</Link>

				<div className='about'>
					<p>You can contact us on phone and WhatsApp also :</p>
					<a href="https://wa.me/message/534MEDM6QND6H1" style={{ textDecoration: 'none' }}>
						<i className="fa fa-whatsapp green-color " style={{ fontSize: '20px', marginRight: '4px' }} ></i>
						+91 9410060815
					</a>
					<br />
					<a href="mailto: support@croblaze.com" style={{ textDecoration: 'none' }}>
						<i style={{ fontSize: '15px', marginRight: '4px' }} className="fa">&#xf0e0;</i>
						support@croblaze.com
					</a>

					<br /><br />
				</div>
			</div>
		</div>
	)
}
