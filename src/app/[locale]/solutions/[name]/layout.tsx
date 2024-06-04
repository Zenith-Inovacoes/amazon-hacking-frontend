import { getProject } from "@/services/apis/get-project";
import { Metadata } from "next";

type Props = {
  params: { locale: string; name: string };
};

export async function generateMetadata({ params }: Props) {
  const solutionData = await getProject({
    name: params.name.replace(/-/g, " "),
  });

  if (!solutionData) {
    return {
      title: "Amazon Hacking",
      description: "Amazon Hacking",
      openGraph: {
        title: "Amazon Hacking",
        description: "Amazon Hacking",
        images: [
          {
            url: "",
            width: 1200,
            height: 630,
            alt: "Amazon Hacking",
          },
        ],
      },
    } satisfies Metadata;
  }

  return {
    title: `${solutionData.name} | Amazon Hacking`,
    description: solutionData.description,
    openGraph: {
      title: solutionData.name,
      description: solutionData.description,
      images: [
        {
          url: solutionData.links?.banner || "",
          width: 1200,
          height: 630,
          alt: solutionData.name,
        },
      ],
    },
  } satisfies Metadata;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
