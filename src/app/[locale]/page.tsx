import { Button } from '@/components/atoms'
import ProjectOverlay from '@/components/organisms/ProjectOverlay'
import { ProjectOverlayChildrenProps } from '@/components/organisms/ProjectOverlay/types'
import ZenithLogo from 'public/ZenithLogoBranca.svg'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

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
    overlayTrigger: (
      <div className='flex w-full h-full justify-center'>
        <Button>Teste</Button>
      </div>
    ),
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-60 font-bold'>
      {/* {t("title")} */}
      <ProjectOverlay
        variant='past'
        videoURL='https://www.youtube.com/embed/fPYSh680ZBY'
        videoTitle='What Your GitHub Says About You | LIVE from Brazil'
        twitter='https://twitter.com/'
        whatsapp='https://web.whatsapp.com/'
        instagram='https://www.instagram.com/'
        facebook='https://www.facebook.com/'
      >
        {childrenData}
      </ProjectOverlay>
    </main>
  )
}
