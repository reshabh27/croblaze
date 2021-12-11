import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "./MyComponents/Login";
import { SignUp } from "./MyComponents/SignUp";
import { Error } from "./MyComponents/Error";

function App() {
	return (
		<>
		
			<Routes>
				<Route path="/" element={<SignUp />} exact/>
				<Route path="/croblaze" element={<SignUp />}/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path='*' element={<Error/>} />
			</Routes>
			
		</>
	);
}

export default App;
