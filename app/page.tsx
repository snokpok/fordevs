import { PropsWithChildren } from "react";
import { categories, projects } from "../common/data";

const columnHeaders = ["Name", "Description", "Categories"];

const Pill = (props: PropsWithChildren) => {
  return (
    <span className="p-2 px-3 m-2 rounded-2xl whitespace-nowrap bg-gray-700">
      {props.children}
    </span>
  );
};

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
        <div className="border border-gray-500 mt-4 rounded border-opacity-50 overflow-auto max-h-screen">
          <table className="w-full relative inline-block" rules="rows">
            <thead
              style={{ backgroundColor: "#14151b" }}
              className="sticky top-0"
            >
              <tr>
                {columnHeaders.map((el) => (
                  <th key={el} className="p-4 font-mono">
                    <p>{el}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border border-x-0 border-gray-700">
                  <td>
                    <p>{p.name}</p>
                  </td>
                  <td>
                    <p>{p.description}</p>
                  </td>
                  <td>
                    {p.categoryIds.map((categoryId) => (
                      <div key={categoryId} className="inline-flex">
                        <Pill>
                          <p className="text-xs">
                            {categories[categoryId].name}
                          </p>
                        </Pill>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
