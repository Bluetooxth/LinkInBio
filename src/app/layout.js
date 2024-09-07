import "./globals.css";
import "./style.css";


export const metadata = {
  title: "Priyanshu Chahar",
  description: "Explore Priyanshu Chahar's social profiles and connect with him on various platforms. Priyanshu is a skilled full stack developer with expertise in frontend and backend technologies.",
  keywords: "Priyanshu Chahar, Priyannxhuu, Full Stack Developer, Social Profiles Manager, Web Development, HTML, CSS, JavaScript, React JS, Next JS, Node.js, Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body>{children}</body>
    </html>
  );
}