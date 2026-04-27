import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
    var navigate = useNavigate()
    const [warn, setwarn] = useState(false)
    const [warn2, setwarn2] = useState(false)

    const [user, setuser] = useState("")
    function handleuser(event) {
        setuser(event.target.value)
        if (event.target.value.trim() === "") {
            setwarn(true)
        }
        else {
            setwarn(false)
        }
    }

    const [pass, setpass] = useState("")
    function handlepass(event) {
        setpass(event.target.value)
        if (event.target.value.trim() === "") {
            setwarn2(true)
        }
        else {
            setwarn2(false)
        }
    }

    function handlesignup() {
        navigate("/signup")
    }

    function Continue() {
        if (user.trim() === "") {
            setwarn(true)
        }
        else {
            setwarn(false)
        }
        if (pass.trim() === "") {
            setwarn2(true)
        }
        else {
            setwarn2(false)
        }
        var userdetails = axios.post("https://netflix-login-xh4m.onrender.com/login",{"user":user,"pass":pass})
        userdetails.then(function (data) {
            if (data.data) {
                navigate("/demo")
            }
            else {
                if (user.length > 0) {
                    alert("User not found, Please signup before Login")
                }
            }
        }).catch(function () {
            alert("Something Went Wrong, Please try again...")
        })
    }
    return (
        <div className="bg-[#3A1113] h-screen">
            <div className="border-b border-b-amber-300 p-5">
                <h1 className="text-4xl font-semibold ml-10 text-[#E50914] max-sm:ml-3">NETFLIX</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-15">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Enter your info to login</h1>
                        <p className="text-[#A5A7B2] mt-2">Or get started with a new account.</p>
                    </div>
                    <div className="bg-[#1C1213] py-1 px-3 rounded w-100 border border-[#A6AEA1] mt-7 max-sm:w-85">
                        <p className="text-[#A6AEA1] text-xs mt-1">Email or mobile number</p>
                        <input onChange={handleuser} className="bg-transparent text-white w-full focus:outline-none mb-2"></input>
                    </div>
                    {warn ? <p className="text-[#E50914]"><i className="fa-regular fa-circle-xmark" style={{ color: "#E50914" }}></i>Enter a valid email or phone number</p> : ""}
                    <div className="bg-[#1C1213] py-1 px-3 rounded w-100 border border-[#A6AEA1] mt-5 max-sm:w-85">
                        <p className="text-[#A6AEA1] text-xs mt-1">Password</p>
                        <input onChange={handlepass} className="bg-transparent text-white w-full focus:outline-none mb-2"></input>
                    </div>
                    {warn2 ? <p className="text-[#E50914]"><i className="fa-regular fa-circle-xmark" style={{ color: "#E50914" }}></i>Enter a strong password</p> : ""}
                    <div onClick={Continue} className="bg-[#E50914] p-4 flex justify-center mt-5 rounded cursor-pointer">
                        <p className="text-white font-bold">Continue</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-5">
                        <p className="text-[#A6AEA1]">Create new account</p><p className="text-[#E50914] underline cursor-pointer" onClick={handlesignup}>Signup</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default App;