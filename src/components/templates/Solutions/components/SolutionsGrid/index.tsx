import ProjectCard from "@/components/atoms/ProjectCard";
import { getProjects } from "@/services/apis/get-projects";
import { env } from "@/services/libs/env.mjs";
import { NormalizeTextToSearch } from "@/services/utils/normalize-text-to-search";
import { headers } from "next/headers";

export async function SolutionsGrid() {
  const searchParams = headers().get("x-current-search-params")?.split("=")[1];
  const solutions = await getProjects({ filter: "all" });

  solutions.sort((a, b) => a.name.localeCompare(b.name));

  const filteredSolutions = solutions.filter((solution) =>
    NormalizeTextToSearch(solution.name).includes(
      NormalizeTextToSearch(searchParams || "")
    )
  );

  solutions.map((solution) => {
    solution.links = {
      github: solution.links.github || "",
      youtube: {
        en:
          solution.links.youtube.en &&
          `https://www.youtube.com/embed/${solution.links.youtube.en}`,
        pt:
          solution.links.youtube.pt &&
          `https://www.youtube.com/embed/${solution.links.youtube.pt}`,
      },
      banner:
        solution.links.banner &&
        `${env.NEXT_PUBLIC_CDN_URL}${solution.links.banner}`,
    };

    solution.team = solution.team.map((name) => {
      const names = name.trim().split(" ") as string[];
      return names[0] + " " + names[names.length - 1];
    });
  });

  return filteredSolutions.length > 0 ? (
    <div className="grid grid-cols-1 gap-[1.18rem] md:gap-6 lg:gap-[3.31rem] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filteredSolutions.map((solution) => (
        <ProjectCard
          key={solution.id}
          id={solution.id}
          name={solution.name}
          description={solution.description}
          team={solution.team}
          links={solution.links}
        />
      ))}
    </div>
  ) : (
    <p>No solutions found</p>
  );
}
