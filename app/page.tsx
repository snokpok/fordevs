import { PropsWithChildren } from "react";
import { categories, projects } from "../common/data";
import Image from "next/image";
import Gallery from "../components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
        <div className="text-center">
          <h1 className="text-5xl">Fordevs</h1>
          <br />
          <h3>A collection of modern developer tools</h3>
          <br />
        </div>
        <Gallery projects={projects} />
      </div>
    </main>
  );
}
