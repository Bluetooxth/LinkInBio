import Link from "next/link"
import Image from "next/image";
import { FaLinkedinIn , FaXTwitter , FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";

const LinkPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen w-full md:w-[60vw] lg:w-[50vw] px-7 py-5">
                <div className="flex flex-col justify-center items-center text-center gap-1">
                    {/* <Image src="/profile.png" alt="Profile Image" width={150} height={150} className="rounded-full mb-2" /> */}
                    <h1 className="text-4xl font-medium text-zinc-900">Priyanshu Chahar</h1>
                    <h1 className="text-2xl font-medium text-zinc-800">MERN Stack Developer</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <Link href='https://github.com/nvmesensor' className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer github">
                        <p className="text-zinc-900 text-2xl font-medium hover:underline transition ease-in-out">Github</p>
                        <p className="text-zinc-800 text-3xl transition ease-in-out"><FaGithub /></p>
                    </Link>
                    <Link href='https://www.linkedin.com/in/priyannxhuu' className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer linkedin">
                        <p className="text-zinc-900 text-2xl font-medium hover:underline transition ease-in-out">Linkedin</p>
                        <p className="text-zinc-800 text-3xl transition ease-in-out"><FaLinkedinIn /></p>
                    </Link>
                    <Link href='https://priyanshuchahar.vercel.app' className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer portfolio">
                        <p className="text-zinc-900 text-2xl font-medium hover:underline transition ease-in-out">Portfolio</p>
                        <p className="text-zinc-800 text-3xl transition ease-in-out"><IoLogoWebComponent /></p>
                    </Link>
                    <Link href='https://twitter.com/priyannxhuu' className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer twitter">
                        <p className="text-zinc-900 text-2xl font-medium hover:underline transition ease-in-out">Twitter</p>
                        <p className="text-zinc-800 text-3xl transition ease-in-out"><FaXTwitter /></p>
                    </Link>
                    <Link href='https://www.youtube.com/@priyannxhuu' className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer youtube">
                        <p className="text-zinc-900 text-2xl font-medium hover:underline transition ease-in-out">Youtube</p>
                        <p className="text-zinc-800 text-3xl transition ease-in-out"><FaYoutube /></p>
                    </Link>
            </div>
        </div>
    )
}
export default LinkPage;