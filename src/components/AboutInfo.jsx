// import './about.css'
const AboutInfo = (prop) => {
    return (
        <div className="flex flex-col ">
            <div className="lableName text-[1.2rem]">{prop.title} : </div>
            <div className="val text-[1.2rem]">{prop.value}</div>
        </div>
    )
}
export default AboutInfo