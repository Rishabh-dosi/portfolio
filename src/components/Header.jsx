import React, { useEffect, useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SegmentIcon from '@mui/icons-material/Segment';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setActiveLink('Home');
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="header flex justify-between w-full ">
                <div className='name flex items-center'>
                    <div className='text-[#1fa90f] md:ml-[30px]'>
                        <CodeOutlinedIcon className='headericon' sx={{ fontSize: "120px" }} />
                    </div>
                </div>
                <nav className="md:flex md:w-[48%] md:justify-between md:items-center md:text-[#544546] md:mr-2 hidden font-[Poppins] text-sm">
                    <div className="nav_link justify-center">
                        <a href="#home">
                            <div className="nav_link_Icon flex justify-center"><HomeRoundedIcon /></div>
                            Home
                        </a>
                    </div>
                    <div className="nav_link text-[#544546]">
                        <a href="#about" className=''>
                            <div className="nav_link_Icon flex justify-center"><PeopleAltOutlinedIcon /></div>
                            About
                        </a>
                    </div>
                    <div className="nav_link">
                        <a href="#skills">
                            <div className="nav_link_Icon flex justify-center"><SpeakerNotesOutlinedIcon /></div>
                            Skills
                        </a>
                    </div>
                    <div className="nav_link">
                        <a href="#portfolio">
                            <div className="nav_link_Icon flex justify-center"><CreditScoreOutlinedIcon /></div>
                            Portfolio
                        </a>
                    </div>
                    <div className="nav_link ">
                        <a href="#contact">
                            <div className="nav_link_Icon flex justify-center"><ContactMailOutlinedIcon /></div>
                            Contact
                        </a>
                    </div>
                </nav>
                <button className='flex md:hidden items-center h-12 text-[#000000]' onClick={handleToggle}>
                    {toggle ? <SegmentIcon /> : <CloseOutlinedIcon />}
                </button>
            </div>
        </>
    );
};

export default Header;
