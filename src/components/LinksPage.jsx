import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";

const links = [
  {
    href: "https://github.com/Bluetooxth",
    label: "Github",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/priyannxhuu",
    label: "Linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://priyanshuchahar.vercel.app",
    label: "Portfolio",
    icon: <IoLogoWebComponent />,
  },
  {
    href: "https://twitter.com/Bluetooxth",
    label: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.youtube.com/@bluetooxth",
    label: "Youtube",
    icon: <FaYoutube />,
  },
];

const LinkPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen w-full md:w-[60vw] lg:w-[50vw] px-7 py-5">
      <div className="flex flex-col justify-center items-center text-center gap-1">
        <img
          src="https://avatars.githubusercontent.com/u/165533860?s=400&u=d745bf6065c13b1c20d433318cd4dd9a73fd9ae1&v=4"
          alt="Profile Image"
          className="rounded-full mb-2 h-[150px] w-[150px] object-cover"
        />
        <h1 className="text-4xl font-medium">Priyanshu Chahar</h1>
        <h2 className="text-2xl font-medium flex flex-col justify-center">
          <span className="">Code, Commit and Repeat</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 w-full">
        {links.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-row justify-between items-center w-full px-6 py-3 cursor-pointer link"
          >
            <p className="text-2xl font-medium hover:underline transition ease-in-out">
              {label}
            </p>
            <p className="text-3xl transition ease-in-out">{icon}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkPage;