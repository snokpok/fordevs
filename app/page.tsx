import { Kbd } from "@/components/kbd";
import { projects } from "../common/data";
import Gallery from "../components/gallery";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-6xl">Fordevs</h1>
      <br />
      <h3>A collection of modern developer tools</h3>
      <br />
    </div>
  )
}

const KbdTips = () => {
  return (
    <div>
      <p className="text-gray-500 text-xs italic leading-7">Press <Kbd>⌘</Kbd> + <Kbd>Left Mouse</Kbd> to open any project{"'"}s website in another tab.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="flex items-center gap-2">
      <p>Made with ❤️ by Vincent Vu</p>
      <Link href={"https://twitter.com/_vmvu"}>
        <TwitterLogoIcon />
      </Link>

    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-10">
      <div className="flex flex-col mb-4">
        <div className="flex self-end mx-10">
          <Link href={"https://github.com/snokpok/fordevs"} passHref target="_blank" className="hover:animate-pulse">
            <GitHubLogoIcon width={30} height={30}/>
          </Link>
        </div>
        <div className="text-center">
          <Header />
          {/*<KbdTips />*/}
          <br />
          <Gallery projects={projects} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
