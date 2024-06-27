import { FaLinkedinIn , FaXTwitter , FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { IoLogoWebComponent } from "react-icons/io5";

const profiles = [
    {
        name : "Priyanshu Chahar",
        developer : "Full Stack Developer",
        image : "/profile.png"
    }
]

const links = [
    {
        plateform : "Github",
        url : "https://github.com/nvmesensor",
        icon : <FaGithub />
    },
    {
        plateform : "Linkedin",
        url : "https://www.linkedin.com/in/priyannxhuu",
        icon : <FaLinkedinIn />
    },
    {
        plateform : "Portfolio",
        url : "https://priyanshuchahar.vercel.app/",
        icon : <IoLogoWebComponent />
    },
    {
        plateform : "Twitter",
        url : "https://twitter.com/priyannxhuu",
        icon : <FaXTwitter />
    },
    {
        plateform : "Youtube",
        url : "https://www.youtube.com/@priyannxhuu",
        icon : <FaYoutube />
    },
]

export { profiles, links };
