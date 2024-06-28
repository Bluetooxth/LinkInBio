import { profiles, links } from "@/data/data";
import Link from "next/link"
import Image from "next/image";

const LinkPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-10 mb-10 w-full md:w-[60vw] lg:w-[50vw] px-5">
            {profiles.map((profile, index) => (
                <div key={index} className="flex flex-col justify-center items-center text-center gap-3">
                    <Image src={profile.image} alt="Profile Image" width={150} height={150} className="rounded-full" />
                    <h1 className="text-4xl font-semibold text-slate-300">{profile.name}</h1>
                    <h1 className="text-3xl font-semibold text-cyan-600">{profile.developer}</h1>
                </div>
            ))}
                <div className="flex flex-col justify-center items-center gap-2 w-full">
            {links.map((link, index) => (
                    <Link key={index} href={link.url} className="flex flex-row justify-between items-center w-full px-6 py-4 rounded-lg cursor-pointer link-card">
                        <p className="text-slate-300 text-2xl font-medium hover:text-cyan-700 hover:underline transition ease-in-out">{link.plateform}</p>
                        <p className="text-slate-300 text-3xl hover:text-cyan-700 transition ease-in-out">{link.icon}</p>
                    </Link>
            ))}
            </div>
        </div>
    )
}
export default LinkPage;