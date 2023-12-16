// import './portfolio.css'
const Project = (prop) => {
    return (
        <div className="project_box flex flex-col w-[300px] h-[400px] justify-center bg-yellow-400 rounded-[2rem] shadow-md shadow-[#353529] hover:scale-[1.03] transition-all ease-out ">
            <div className='flip_card m-auto'>
                <img src={prop.img_link} alt="" srcset="" className="project_img w-[280px] h-[280px] rounded-[1.4rem] mt-[4px] mr-[10px] mb-[-10px] ml-[4px] text-[1.2rem] items-center text-center  " />
                <div className="project_name text-[2rem] relative font-semibold top-[0.1rem] justify-center text-center h-fit   ">
                    {prop.name}
                </div>
            </div>
            

            <div className="m-auto">
                <a href={prop.git_link} target="_blank"><button className="btn mt-[-5rem] bg-gradient-to-r from-[#d1e84d] to-[#fff] text-black w-[90px] h-[30px] text-[1rem] rounded-[2rem] hover:bg-[#d1e84d] "> Github </button></a>
            </div>
            

        </div>
    )
}

export default Project;