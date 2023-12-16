import React from "react";
import Project from './Project'
// import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="pfl_container relative top-auto z-3 text-[3rem] text-black min-w-full h-fit flex flex-col justify-center mt-3  " id="portfolio">
            <div className="pfl_head text-center mt-[3rem]">Portfolio</div>
            <div className="pfl_main w-[95%] flex flex-col justify-center m-[3rem 5% 3rem 5%]  ">
                
                <div className="projects grid grid-cols-3 gap-[2rem] justify-center w-[80%] m-auto mt-[4rem] mb-[4rem] ">
                    <Project img_link="https://d1iiooxwdowqwr.cloudfront.net/pub/appsubmissions/20190806153212_icon.png" git_link="" name="MERN Chat App" />
                    <Project img_link="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/02/Magnific-Gallery-css-image-gallery.jpg" git_link="https://github.com/Rishabh-dosi/image-gallery" name="Image Gallery" />
                    <Project img_link="https://www.wikihow.com/images/thumb/3/38/Make-a-To-Do-List-Step-5-Version-3.jpg/v4-460px-Make-a-To-Do-List-Step-5-Version-3.jpg" git_link="" name="Zomi clone" />
                    <Project img_link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1VcFtkI2xp5odNIjIPKYm60dFzWU1pUznw&usqp=CAU" git_link="https://github.com/Rishabh-dosi/bookstore" name="Book Store" />
                    <Project img_link="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" git_link="" name="Marvel Collection" />
                    <Project img_link= "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" git_link="" name="Spotify Clone"/>
                </div>
            </div>
        </div>
    )
}
export default Portfolio; 