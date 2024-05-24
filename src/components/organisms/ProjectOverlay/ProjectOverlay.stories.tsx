import { Meta, StoryObj } from '@storybook/react'
import ProjectOverlay from '.'
import { ProjectOverlayProps, ProjectOverlayChildrenProps } from './types'

import Button from '@/components/atoms/Button'
import ZenithLogo from 'public/ZenithLogoBranca.svg'

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

const meta: Meta<ProjectOverlayProps> = {
  title: 'Components/Organisms/ProjectOverlay',
  component: ProjectOverlay,

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ProjectOverlayProps>

export const Current: Story = {
  render: () => {
    return (
      <ProjectOverlay
        videoURL='https://www.youtube.com/embed/fPYSh680ZBY'
        videoTitle='What Your GitHub Says About You | LIVE from Brazil'
        twitter='https://twitter.com/'
        whatsapp='https://web.whatsapp.com/'
        instagram='https://www.instagram.com/'
        facebook='https://www.facebook.com/'
        overlayTrigger={
          <div className='flex w-full h-full justify-center'>
            <Button>Teste</Button>
          </div>
        }
      >
        {childrenData}
      </ProjectOverlay>
    )
  },
}

export const Past: Story = {
  render: () => {
    return (
      <ProjectOverlay
        variant='past'
        videoURL='https://www.youtube.com/embed/fPYSh680ZBY'
        videoTitle='What Your GitHub Says About You | LIVE from Brazil'
        twitter='https://twitter.com/'
        whatsapp='https://web.whatsapp.com/'
        instagram='https://www.instagram.com/'
        facebook='https://www.facebook.com/'
        overlayTrigger={
          <div className='flex w-full h-full justify-center'>
            <Button>Teste</Button>
          </div>
        }
      >
        {childrenData}
      </ProjectOverlay>
    )
  },
}
