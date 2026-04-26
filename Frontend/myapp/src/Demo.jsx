import img from "./assets/netflixbg.jpg";
import { useNavigate } from "react-router-dom";

function Demo() {

    var navigate = useNavigate()
    function login()
    {
        navigate("/")
    }

    function plan1()
    {
        alert("Plan ₹199/month selected Successfully")
    }
    function plan2()
    {
        alert("Plan ₹499/month selected Successfully")
    }
    function plan3()
    {
        alert("Plan ₹649/month selected Successfully")
    }
    return (
        <div className="bg-[#3A1113] w-full h-screen overflow-hidden object-cover flex flex-col max-sm:overflow-scroll">
            <div className="border-b border-b-amber-300 p-5 flex items-center justify-between">
                <h1 className="text-4xl font-semibold ml-10 text-[#E50914] max-sm:ml-3">NETFLIX</h1>
                <div className="flex items-center gap-3 cursor-pointer" onClick={login}>
                    <p className="text-white text-2xl">Login</p>
                    <i className="fa-solid fa-user text-2xl" style={{color:"#E50914"}}></i>
                </div>
                
            </div>
            <div className="flex-1" style={{ backgroundImage: `url(${img})` }}>
                <div className="bg-black/60 h-full flex flex-col items-center">
                    <div className="flex flex-col items-center mt-8">
                        <p className="text-[#E50914] font-bold">STEP 1 OF 3</p>
                        <h1 className="text-white font-bold text-3xl max-sm:text-xl">Choose the plan that's right for you</h1>
                        <p className="text-white text-sm">Watch unlimited movies, TV shows and more.</p>
                    </div>
                    <div className="flex gap-14 mt-15 flex-wrap justify-center mb-15 max-sm:gap-10 max-sm:mt-10">
                        <div className="box1 bg-black p-8 flex flex-col gap-5 border border-[#E50914] rounded-xl">
                            <div className="flex flex-col gap-3 border border-b-[#E50914]">
                                <p className="text-white text-2xl font-bold">Mobile</p>
                                <p className="flex text-white items-center mb-5"><p className="text-white text-2xl font-bold">₹199</p>/month</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white flex items-center gap-2"><i className="fa-solid fa-mobile-screen text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Watch on 1 device</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-download text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Download on 1 device</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-video text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Good video quality</p>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={plan1} className="text-white bg-[#E50914] py-2 px-7 font-bold rounded">Choose Mobile</button>
                            </div>
                        </div>
                        <div className="box1 bg-black p-8 flex flex-col gap-5 border border-[#E50914] rounded-xl">
                            <div className="flex flex-col gap-3 border border-b-[#E50914]">
                                <p className="text-white text-2xl font-bold">Standard</p>
                                <p className="flex text-white items-center mb-5"><p className="text-white text-2xl font-bold">₹499</p>/month</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white flex items-center gap-2"><i className="fa-solid fa-desktop text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Watch on 2 devices</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-download text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Download on 2 device</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-video text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Great video quality</p>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={plan2} className="text-white bg-[#E50914] py-2 px-7 font-bold rounded">Choose Standard</button>
                            </div>
                        </div>
                        <div className="box1 bg-black p-8 flex flex-col gap-5 border border-[#E50914] rounded-xl">
                            <div className="flex flex-col gap-3 border border-b-[#E50914]">
                                <p className="text-white text-2xl font-bold">Premium</p>
                                <p className="flex text-white items-center mb-5"><p className="text-white text-2xl font-bold">₹649</p>/month</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white flex items-center gap-2"><i className="fa-solid fa-desktop text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Watch on 4 devices</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-download text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Download on 6 device</p>
                                <p className="text-white flex items-center gap-2"><i class="fa-solid fa-video text-xl" style={{color: "rgb(182, 167, 167)"}}></i> Best video quality</p>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={plan3} className="text-white bg-[#E50914] py-2 px-7 font-bold rounded">Choose Premium</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Demo;