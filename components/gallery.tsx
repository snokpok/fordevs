"use client";

import { useEffect, useState } from "react";
import { Project } from "../common/data";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const ProjectCard = (props: {
  imgPath: string;
  name: string;
  websiteUrl: string;
}) => {
  const [pressingCmd, setPressingCmd] = useState<boolean>(false);

  useEffect(() => {
    const handleDown = (ev: KeyboardEvent) => {
      if (ev.key === "Meta") {
        setPressingCmd(true);
      }
    };
    const handleUp = (ev: KeyboardEvent) => {
      if (ev.key === "Meta") {
        setPressingCmd(false);
      }
    };
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  return (
    <Link href={pressingCmd ? props.websiteUrl : ""}>
      <button>
        <div
          className={`bg-gray-950 flex items-center border border-gray-600 gap-3 shadow-md rounded-md hover:outline hover:outline-1 hover:outline-slate-700 hover:shadow-xl transition hover:-translate-y-1 py-3 px-4 ${
            pressingCmd ? "hover:bg-cyan-800" : ""
          } shadow-inner`}
        >
          <Image
            src={props.imgPath}
            style={{ objectFit: "contain" }}
            alt={`${props.name}'s logo`}
            width={50}
            height={50}
          />
          <p className="p-4 font-bold">{props.name}</p>
        </div>
      </button>
    </Link>
  );
};

export const Gallery = (props: { projects: Project[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(
    props.projects
  );
  const fuse = new Fuse(props.projects, {
    keys: ["name", "description", "categoryIds"],
    threshold: 0.4,
  });

  useEffect(() => {
    if (searchTerm === "") {
      setDisplayedProjects(props.projects);
      return;
    }
    const res = fuse.search(searchTerm);
    setDisplayedProjects(
      res.map((el) => {
        return el.item;
      })
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col w-screen px-32">
      <input
        onChange={(ev) => {
          setSearchTerm(ev.target.value);
        }}
        placeholder="e.g Vercel"
        className="flex items-center py-2 px-4 bg-gray-700 border border-gray-600 outline-2 focus:outline outline-gray-500 w-min rounded-md"
      />
      <br />
      <div className="flex gap-3 flex-wrap">
        {displayedProjects.length === 0 && (
          <p className="italic text-gray-500">No results</p>
        )}
        {displayedProjects.map((project) => {
          return (
            <ProjectCard
              imgPath={project.imgPath || ""}
              name={project.name}
              key={project.id}
              websiteUrl={project.website || ""}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
