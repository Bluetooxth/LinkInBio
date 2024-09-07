import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";

const LinkPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen w-full md:w-[60vw] lg:w-[50vw] px-7 py-5">
      <div className="flex flex-col justify-center items-center text-center gap-1">
        <img src="https://avatars.githubusercontent.com/u/165533860?s=400&u=d745bf6065c13b1c20d433318cd4dd9a73fd9ae1&v=4" alt="Profile Image" className="rounded-full mb-2 h-[150px] w-[150px] object-cover" />
        <h1 className="text-4xl font-semibold">Priyanshu Chahar</h1>
        <h2 className="text-2xl font-semibold flex flex-col justify-center">
            <span className="">Code, Commit and Repeat</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        <Link
          href="https://github.com/Bluetooxth"
          className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer github"
        >
          <p className="text-2xl font-semibold hover:underline transition ease-in-out">
            Github
          </p>
          <p className="text-3xl transition ease-in-out">
            <FaGithub />
          </p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/priyannxhuu"
          className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer linkedin"
        >
          <p className="text-2xl font-semibold hover:underline transition ease-in-out">
            Linkedin
          </p>
          <p className="text-3xl transition ease-in-out">
            <FaLinkedinIn />
          </p>
        </Link>
        <Link
          href="https://priyanshuchahar.vercel.app"
          className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer portfolio"
        >
          <p className="text-2xl font-semibold hover:underline transition ease-in-out">
            Portfolio
          </p>
          <p className="text-3xl transition ease-in-out">
            <IoLogoWebComponent />
          </p>
        </Link>
        <Link
          href="https://twitter.com/Bluetooxth"
          className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer twitter"
        >
          <p className="text-2xl font-semibold hover:underline transition ease-in-out">
            Twitter
          </p>
          <p className="text-3xl transition ease-in-out">
            <FaXTwitter />
          </p>
        </Link>
        <Link
          href="https://www.youtube.com/@bluetooxth"
          className="flex flex-row justify-between items-center w-full px-6 py-4 border-4 border-zinc-800 cursor-pointer youtube"
        >
          <p className="text-2xl font-semibold hover:underline transition ease-in-out">
            Youtube
          </p>
          <p className="text-3xl transition ease-in-out">
            <FaYoutube />
          </p>
        </Link>
      </div>
    </div>
  );
};
export default LinkPage;