import { Meta, StoryObj } from "@storybook/react"
import ProjectCard from "."
import { ProjectCardProps } from "./types"
import ZenithLogo from 'public/ZenithLogoBranca.svg'

import { CourseEnum } from "@/types/IProject"

// Dados de teste
const teste = {
  id: "123456",
  name: "Projeto X",
  team: ["Lucas Tavares", "Daniel DanDan", "André Sandro", "Gabriel Moço", "Cauã Cadu", "Fernanda Escritório"],
  description: "A comprehensive project aimed at developing an innovative solution for sustainable energy.",
  status: true,
  links: {
    github: "https://github.com/example/project-alpha",
    youtube: {
      en: "https://www.youtube.com/watch?v=bJhPNFamNwk",
      pt: "https://www.youtube.com/watch?v=bJhPNFamNwk"
    },
    banner: "https://example.com/banner.png"
  },
  course: CourseEnum.ECOMP,
  logoUrl: 'https://drive.google.com/file/d/1rkoQi9oxzGpTd4_Q0VHYTd0XL8i0HwnO/view?usp=sharing',
  year: 2024
}

export default {
  decorators: [
    (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
  ],
  title: "Components/Atoms/ProjectCard",
  component: ProjectCard,
  tags: ['autodocs'],
} as Meta<ProjectCardProps>

type Story = StoryObj<ProjectCardProps>

export const Default: Story = {    
  render: () => {
    return (
      <ProjectCard
        id={teste.id}
        name={teste.name}
        team={teste.team}
        description={teste.description}
        status={teste.status}
        links={teste.links}
        course={teste.course}
      
        year={teste.year}
      />
    )
  },
}

export const WithLogo: Story = {    
  render: () => {
    return (
      <ProjectCard
        id={teste.id}
        name={teste.name}
        team={teste.team}
        description={teste.description}
        status={teste.status}
        links={teste.links}
        course={teste.course}
        logoUrl={teste.logoUrl}
        year={teste.year}
      />
    )
  },
}
