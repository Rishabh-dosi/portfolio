import React from "react";
// import './about.css'
import AboutInfo from "./AboutInfo";
import pofileImg from './profileimg.jpg'
const About = () => {
    return (
        <>
            <div className="about_box relative flex mt-[4%] justify-center min-h-full min-w-full" id="about">
                <div className="about_main flex flex-col relative w-[70%] h-[90%] rounded-[40px] bg-gradient-to-br from-[#EFEF40] to-[#E8EDA3] ">
                    <div className="abt_head w[100%] font-sans text-center text-[2rem] font-bold mt-[3rem] mr-[1.4rem] mb-[3rem] ">
                        ABOUT ME
                    </div>
                    <div className="abt_content flex">
                        <div className="abt_img w-[400px] justify-center p-[3rem]">
                            <img src={pofileImg} alt="" className="abt_my_image rounded-lg" />
                        </div>
                        <div className="info mt-[3rem] grid grid-cols-2 grid-rows-2 capitalize p-[2rem] pb-[6rem] ">
                            <AboutInfo title="name" value="Rishabh Dosi" />
                            <AboutInfo title="profession" value="web developer" />
                            <AboutInfo title="age" value="21" />
                            <AboutInfo title="senior secondary" value="89%" />
                            <AboutInfo title="junior secondary" value="76.2%"/>
                            <AboutInfo title="under graduation" value="B.Tech Computer Science(2020 -24)"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
