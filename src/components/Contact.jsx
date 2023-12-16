import React,{useRef} from "react";
import './contact.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { fontSize } from "@mui/system";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_frq3eqs', 'template_eaa0plq', form.current, 'OJsHrbxsMibGRqaHl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        document.querySelector(".btn_submit").innerHTML="mail sent"
    };
    return (
        <div className="cnt_main" id="contact">
            <div className="cnt_head">
                <h1>Contact Me</h1>
            </div>
            <div className="cnt_container">
                <div className="social">
                    <div className="social_contact">
                        <div className="social_icon">
                            <WhatsAppIcon sx={{ fontSize: "2.3rem" }} />
                        </div>
                        <h5>+91 8319873365</h5>
                        <a href="http://wa.me/+918319873365?text=hii" target="_blank">Send Message</a>
                    </div>
                    <div className="social_contact">
                        <div className="social_icon">
                            <LinkedInIcon sx={{ fontSize: "2.3rem" }} />
                        </div>
                        <h5>Rishabh Dosi</h5>
                        <a href="">Send Message</a>
                    </div>
                    <div className="social_contact">
                        <div className="social_icon">
                            <EmailIcon sx={{ fontSize: "2.3rem" }} />
                        </div>
                        <h5>rishabhdosi11@gmail.com</h5>
                        <a href="">Send Message</a>
                    </div>
                </div>
                <div className="form">
                    <div className="form_heading">Drop a Message</div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" className="inp" placeholder="Enter Your name" required name="name"/><br />
                        <input type="text" className="inp" placeholder="Enter email" name="email" /><br />
                        <textarea type="text" className="inp message_box" name="message"placeholder="Type a message" rows="7" required /><br />
                        <input className="btn_submit" type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;