// import Solutions from "@/components/templates/Solutions";

import { Solution } from "@/components/templates/Solution";
import { getProject } from "@/services/apis/get-project";
import { env } from "@/services/libs/env.mjs";

type Props = {
  params: { name: string };
};

export default async function SolutionPage({ params }: Props) {
  const solutionData = await getProject({ name: params.name });

  solutionData.links = {
    github: solutionData.links?.github || "",
    youtube: {
      en:
        solutionData.links?.youtube?.en &&
        `https://www.youtube.com/embed/${solutionData.links?.youtube?.en}`,
      pt:
        solutionData.links?.youtube?.pt &&
        `https://www.youtube.com/embed/${solutionData.links?.youtube?.pt}`,
    },
    banner:
      solutionData.links?.banner &&
      `${env.NEXT_PUBLIC_CDN_URL}${solutionData.links?.banner}`,
  };

  return <Solution project={solutionData} />;
}
