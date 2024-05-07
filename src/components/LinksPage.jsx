import { profiles, links } from "@/data/data";
import Link from "next/link"

const LinkPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-10 mb-10 w-full md:w-[60vw] lg:w-[50vw] px-5">
            {profiles.map((profile, index) => (
                <div key={index} className="flex flex-col justify-center items-center text-center gap-3">
                    <img src={profile.image} alt="Profile Image" className="h-[150px] w-[150px] rounded-full" />
                    <h1 className="text-3xl font-semibold text-slate-200">{profile.name}</h1>
                    <h1 className="text-2xl font-medium text-cyan-600">{profile.developer}</h1>
                </div>
            ))}
            {links.map((link, index) => (
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <Link key={index} href={link.url} className="flex flex-row justify-between items-center w-full px-6 py-4 rounded-full cursor-pointer link-card">
                        <p className="text-slate-300 text-2xl font-medium hover:text-cyan-700 hover:underline transition ease-in-out">{link.plateform}</p>
                        <p className="text-cyan-600 text-3xl hover:text-cyan-700 transition ease-in-out">{link.icon}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default LinkPage;