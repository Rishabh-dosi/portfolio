// import './skills.css'
import Skill from './Skillset'
const SkillSet = () => {
    return (
        <div className="skl_main relative top-auto mt-[2%] min-h-[100vh] flex flex-col  " id='skills'>
            <div className="skl_head text-[3rem] text-center uppercase mt-[2rem] mb-[1rem]  ">
                My Skills
            </div>
            <div className="skl_set grid m-auto lg:grid-cols-3 grid-cols-1 gap-x-[8rem] gap-y-[3rem] ">
                <Skill name="C/C++" level="Beginner" />
                <Skill name="Python" level="Beginner" />
                <Skill name="Java" level="Intermediate" />
                <Skill name="Javascript" level="Pro" />
                <Skill name="ReactJS" level="Pro" />
                <Skill name="NodeJS" level="Beginner" />
                <Skill name="BootStrap" level="Pro" />
                <Skill name="Android Dev" level="Intermediate" />
                
            </div>
        </div>
    )
}

export default SkillSet