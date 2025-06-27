// import { useState } from "react";
// import { Link } from "react-router-dom";

// export function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState("");

//     return (
//         <div className="container bg-white max-w-md">
//             <form className="max-w-md p-5" id="login-form">
//               <h2 className="font-bold pb-2 text-center text-black">Login</h2> 
//               <p className="font-normal text-center text-gray-400">If you don't have an account please <Link to={"/signup"}>Sign Up</Link></p> 
//               <div className="flex flex-col py-2 gap-5">
//                 <input className="text-black border-gray-300 border-2 p-2" placeholder="Email" name="email" type="email"/>
//                 <input className="text-black border-gray-300 border-2 p-2" placeholder="Password" name="password" type="password"/>
//                 {/* <button type="submit" disabled={loading} className="w-30 bg-blue-600 text-white p-2 font-bold">Login</button> */}
//               </div>
//             </form>
//         </div>
//     );
// }