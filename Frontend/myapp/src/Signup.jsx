import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Signup() {

    var navigate = useNavigate()
    const [warn, setwarn] = useState(false)
    const [warn2, setwarn2] = useState(false)
    const [warn3, setwarn3] = useState(false)

    function signup() {
        if (spass == confrim && suser.length > 0 && spass.length > 0 && confrim.length > 0) {
            var signuserdetails = axios.get(`http://localhost:3000/signup?suser=${suser}&spass=${spass}`)
            navigate("/")
        }
        else {
            if (suser.length == 0) {
                setwarn(true)
            }
            if (spass.length == 0) {
                setwarn2(true)
            }
            if (confrim.length == 0) {
                setwarn3(true)
            }
            if (spass != confrim) {
                alert("Password and the Confrim password must be same")
            }
            else {
                alert("Please check out feild and Enter the value correctly")
            }

        }
    }

    const [suser, setsuser] = useState("")
    function handlesuser(event) {
        setsuser(event.target.value)
        if (event.target.value.trim() == "") {
            setwarn(true)
        }
        else {
            setwarn(false)
        }
    }

    const [spass, setspass] = useState("")
    function handlespass(event) {
        setspass(event.target.value)
        if (event.target.value.trim() == "") {
            setwarn2(true)
        }
        else {
            setwarn2(false)
        }
    }

    const [confrim, setconfrim] = useState("")
    function handleconfrim(event) {
        setconfrim(event.target.value)
        if (event.target.value.trim() == "") {
            setwarn3(true)
        }
        else {
            setwarn3(false)
        }
    }

    function Login() {
        navigate("/")
    }

    return (
        <div className="bg-[#3A1113] h-screen">
            <div className="border-b border-b-amber-300 p-5">
                <h1 className="text-4xl font-semibold ml-10 text-[#E50914] max-sm:ml-3">NETFLIX</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-15">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Sign up</h1>
                    </div>
                    <div className="bg-[#1C1213] py-1 px-3 rounded w-100 border border-[#A6AEA1] mt-7 max-sm:w-85">
                        <p className="text-[#A6AEA1] text-xs mt-1">Email or mobile number</p>
                        <input onChange={handlesuser} className="bg-transparent text-white w-full focus:outline-none mb-2"></input>
                    </div>
                    {warn ? <p className="text-[#E50914]"><i className="fa-regular fa-circle-xmark" style={{ color: "#E50914" }}></i>Enter a valid email or phone number</p> : ""}

                    <div className="bg-[#1C1213] py-1 px-3 rounded w-100 border border-[#A6AEA1] mt-5 max-sm:w-85">
                        <p className="text-[#A6AEA1] text-xs mt-1">Password</p>
                        <input onChange={handlespass} className="bg-transparent text-white w-full focus:outline-none mb-2"></input>
                    </div>
                    {warn2 ? <p className="text-[#E50914]"><i className="fa-regular fa-circle-xmark" style={{ color: "#E50914" }}></i>Enter a strong password</p> : ""}
                    <div className="bg-[#1C1213] py-1 px-3 rounded w-100 border border-[#A6AEA1] mt-5 max-sm:w-85">
                        <p className="text-[#A6AEA1] text-xs mt-1">Confrim password</p>
                        <input onChange={handleconfrim} className="bg-transparent text-white w-full focus:outline-none mb-2"></input>
                    </div>
                    {warn3 ? <p className="text-[#E50914]"><i className="fa-regular fa-circle-xmark" style={{ color: "#E50914" }}></i>Enter a confrim password</p> : ""}
                    <div onClick={signup} className="bg-[#E50914] p-4 flex justify-center mt-5 rounded cursor-pointer">
                        <p className="text-white font-bold">Sign up</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-5">
                        <p className="text-[#A6AEA1]">Go to Login after Signup</p><p className="text-[#E50914] underline cursor-pointer" onClick={Login}>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;