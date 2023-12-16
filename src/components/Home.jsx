import React, { useState } from "react";
import myimage from "../assets/myimage-removebg-preview.png"
// import './abt.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import DownloadIcon from '@mui/icons-material/Download';
import ResumePdf from "../assets/resume.pdf"
import TypewriterComponent from "typewriter-effect";



const Home = () => {
   
    return (
        <>
                <div className="Home_box w-full h-[90vh] flex mt-[5rem] relative" id="home">
                   <div className="content_box flex-col">
                    <div className="intro w-[60vw] m-2 text-[4vw] flex font-[Poppins] font-[500]">
                        Hello I'm a &#8209; <span className="profession font-[Kavoon] text-blue-700"> <TypewriterComponent
                            options={{
                                strings: ["Web Developer", "Java Developer"],
                                autoStart: true,
                                loop: true,
                                cursor: "!"
                            }}
                        /></span>
                    </div>
                    <div className="about text-[1.1rem] m-2">
                        Explore my portfolio to witness the synergy of design and development in my work.
                    </div>
                    <div className="buttons m-2 w-[30%] flex">
                        <a href="#contact"><button className="button w-fit bg-red-600 flex rounded-2xl text-white p-2 m-1">Hire Me <div> <TelegramIcon /></div></button></a>
                        <a href={ResumePdf} download="Resume" target="_blank"><button className="button w-fit bg-red-600 flex rounded-2xl text-white p-2 m-1">Download CV <div><DownloadIcon /></div></button></a>
                    </div>
                </div> 
                <div className="img ">
                    <div className="circular_bg h-[64vh] w-[35vw]  bg-yellow-200 relative top-[-3rem] rounded-[400%]">
                        <img src={myimage} alt="" srcset="" className="my_image relative h-full top-[-3rem]"/>
                    </div>
                    <div className="myname font-[Kanit] tracking-wider text-[5vw] flex justify-center mt-[-3rem]">Rishabh Dosi</div>              
                </div>  
                </div>

        </>
    )
}
export default Home;