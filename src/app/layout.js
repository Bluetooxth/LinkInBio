import { Syne } from "next/font/google";
import Head from "next/head"
import "./globals.css";
import "./style.css";

const syne = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Chahar",
  description: "Explore Priyanshu Chahar's social profiles and connect with him on various platforms. Priyanshu is a skilled full stack developer with expertise in frontend and backend technologies.",
  keywords: "Priyanshu Chahar, Priyannxhuu, Full Stack Developer, Social Profiles Manager, Web Development, HTML, CSS, JavaScript, React JS, Next JS, Node.js, Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the meta tag for Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-7363136706117487" />
      </Head>
      <body className={syne.className}>{children}</body>
    </html>
  );
}