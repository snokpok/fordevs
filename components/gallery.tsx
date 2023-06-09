"use client";

import { useEffect, useRef, useState } from "react";
import { Project } from "../common/data";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useKeyboard } from "@/hooks/use-keyboard";

const ProjectCard = (props: {
  project: Project
}) => {
  const { currentKey } = useKeyboard()
  const pressingCmd = currentKey === "Meta";
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <Link href={props.project.website} passHref target="_blank">
      <button className={`cursor-pointer`} onMouseEnter={() => {
        setMouseOn(true)
      }} onMouseLeave={() => {
        setMouseOn(false);
      }}>
        <div
          className={`relative bg-gray-950 flex items-center border border-gray-600 gap-3 shadow-md rounded-md hover:outline hover:outline-1 hover:outline-slate-700 hover:shadow-xl transition hover:-translate-y-1 py-3 px-4 ${pressingCmd ? "hover:bg-cyan-950" : ""
            } shadow-inner`}
        >
          {mouseOn && 
            (
              <span className="absolute -top-2 -right-2 bg-cyan-800 p-1 rounded-full"><ArrowTopRightIcon /></span>
            )
          }
          <Image
            src={props.project.imgPath}
            style={{ objectFit: "contain" }}
            alt={`${props.project.name}'s logo`}
            width={50}
            height={50}
          />
          <p className="p-4 font-bold">{props.project.name}</p>
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
  const searchBarRef = useRef<HTMLInputElement>(null);
  const [searchFocused, setSearchFocused] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "/") {
        ev.preventDefault();
        searchBarRef.current?.focus();
      } else if (ev.key === "Escape") {
        searchBarRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  return (
    <div className="flex flex-col w-screen h-min px-32">
      <div className="flex relative items-center w-min">
        <input
          onChange={(ev) => {
            setSearchTerm(ev.target.value);
          }}
          placeholder="e.g auth"
          className="flex items-center py-2 px-4 bg-gray-700 border border-gray-600 outline-2 focus:outline outline-gray-500 w-64 rounded-md"
          ref={searchBarRef}
          onFocus={() => {
            setSearchFocused(true)
          }}
          onBlur={() => {
            setSearchFocused(false)
          }}
        />
        {!searchFocused && 
          (
            <div className="absolute right-2">
              <p className="px-2 border border-gray-500 rounded-md">/</p>
            </div>
          )
        }
      </div>

      <br />
      <div className="flex gap-3 flex-wrap">
        {displayedProjects.length === 0 && (
          <p className="italic text-gray-500">No results</p>
        )}
        {displayedProjects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              project={project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
