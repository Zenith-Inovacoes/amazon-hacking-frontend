import { Meta, StoryObj } from "@storybook/react"
import ProjectCard from "."
import ProjectCardProps, { ProjectOverlayChildrenProps }  from "./types"

import Button from '@/components/atoms/Button'
import ZenithLogo from 'public/ZenithLogoBranca.svg'
import { CourseEnum } from "@/types/IProject"
import { string, boolean, number } from "zod"

const childrenData: ProjectOverlayChildrenProps = {
    solutionName: 'NOME DA SOLUCAO',
    teamLogo: ZenithLogo,
    solutionDescription:
      'Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.\n\nMorbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.',
    altLogo: 'Logo da Zenith Inova',
    teamMembers: [
      'Gabriel Marcelino',
      'Rian Ernesto',
      'Marco Antonio',
      'Elissandra Nascimento',
      'Daniel Marcelino',
      'Fernanda Panzera',
      'André Sidrim',
      'Lucas Gabriel',
    ],
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
            id="1"
            name="Tupã"
            am: string[],
    description: string,
    status?: boolean
    links: {
        github: string,
        youtube: {
            en: string,
            pt: string
        },
        banner?: string
    },
    course: CourseEnum,
    logoUrl?: string,
    year?: number
       
          >
          </ProjectCard>
        )
      },
    }