import { Meta, StoryObj } from "@storybook/react"
import ProjectCard from "."
import { ProjectCardProps } from "./types"
import ZenithLogo from 'public/ZenithLogoBranca.svg'

import { CourseEnum } from "@/types/IProject"

// Dados de teste
const teste = {
  id: "123456",
  name: "Project Alpha",
  team: ["Alice Smith", "Bob Johnson", "Charlie Davis"],
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
  year: 2024
}

export default {
  decorators: [
    (Story) => <div className="w-full py-8 grid place-items-center"><Story /></div>
  ],
  title: "Components/Atoms/ProjectCard",
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {
    target: {
      description: "Default anchor property. In the case of this component, if the target is equal to `_blank`, it will also display an icon next to the url text.",
    }
  }
} as Meta<ProjectCardProps>

type Story = StoryObj<ProjectCardProps>

export const Success: Story = {    
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
