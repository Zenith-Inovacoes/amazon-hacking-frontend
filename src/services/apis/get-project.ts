import { api } from "../libs/axios";
import { ProjectType } from "@/types/project";

type getProjectType = {
  name: string;
};

export async function getProject({ name }: getProjectType) {
  const { data } = await api.get(`projects/${name}`);

  return data as ProjectType;
}
