import { api } from "../libs/axios";
import { IProject } from "@/types/IProject";

type getProjectType = {
    name: string,
}

export async function getProject({name}: getProjectType) {
    const {data} = await api.get(`projects/${name}`)

    return data as IProject
}