import { useState } from "react";
import { loginUser } from "../service/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle login logic here
		console.log("Email:", email, "Password:", password);
		loginUser({ email, password }).then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		});
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
				<div className="flex flex-col items-center">
					{/* Logo and brand name */}
					<img
						src="https://i.pinimg.com/originals/61/e6/15/61e6153ec69f341620edd7311a6e2463.jpg" 
						alt="workForMe"
						className="h-8 w-auto sm:h-10"
					/>
					<span className="ml-3 text-xl font-bold text-red-500">WorkForMe</span>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Not a member yet? <span className="text-blue-500" onClick={() => navigate("/register")}>Sign Up</span>
					</label>

					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
