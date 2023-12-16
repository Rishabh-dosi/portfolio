// import './skills.css'

const Skill = (props) => {
    return (
        <div className="skl_case flex flex-col bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-400 w-[10rem] h-[10rem] rounded-[20px] justify-center items-center text-center shadow-md drop-shadow-2xl shadow-[#686847] 
        hover:bg-none hover:bg-[#f3f5f8]">
            <div className="skl_name text-[2rem] mb-2">{props.name}</div>
            <div className="skl_level text[1.2rem]">{props.level}</div>
        </div>
    )
} 
export default Skill;