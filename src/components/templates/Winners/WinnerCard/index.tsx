'use client'

import { cn } from '@/services/utils/className.utils'
import { WinnerCardProps } from './types'
import { Button, LogoButton } from '@/components/atoms'
import Image from 'next/image'
import { ProjectOverlayChildrenProps } from '@/components/organisms/ProjectOverlay/types'

import ZenithTrophy from 'public/images/ZenithTrophy.svg'
import FirstPlaceWinner from 'public/images/FirstPlaceWinner.svg'
import SecondPlaceWinner from 'public/images/SecondPlaceWinner.svg'
import ThirdPlaceWinner from 'public/images/ThirdPlaceWinner.svg'
import ProjectOverlay from '@/components/organisms/ProjectOverlay'

import ZenithLogo from 'public/ZenithLogoBranca.svg'
import HelixLogo from 'public/Helix.png'
import TucumaLogo from 'public/Tucuma.png'
import InventoryLogo from 'public/Inventory.png'
import AranduLogo from 'public/Arandu.png'
import CoticoLogo from 'public/Cotico.png'
import ParajasLogo from 'public/Parajas.png'

import AmazonHacking from 'public/images/AmazonHackingColoredLogo.svg'

const WinnerCard = ({
  children,
  currentYear,
  idx,
  course,
  className,
  ...props
}: WinnerCardProps) => {
  const childrenData: ProjectOverlayChildrenProps[] = [
    {
      solutionName: 'Tupã',
      teamLogo: HelixLogo,
      solutionDescription:
        'A Hélix apresenta o Tupã, um sistema composto atualmente de dois módulos independentes, sendo eles o sistema de limpeza de raízes e de purificação de água, com isso o Tupã é capaz de aumentar tanto a produção quanto a qualidade da água de uma lavoura.',
      altLogo: 'Logo da Hélix',
      teamMembers: [
        'Ivanovich Santos',
        'Lucas Amorim',
        'Mateus Couto',
        'Rômulo Conceição',
      ],
    },
    {
      solutionName: 'TucuExtract',
      teamLogo: TucumaLogo,
      solutionDescription:
        'Neo Plus apresenta a revolucionária Máquina de Extração do Tucumã, projetada para extrair o máximo de potencial dessa poderosa fruta da Amazônia. Combinando tecnologia avançada e eficiência incomparável, nossa máquina é a solução perfeita para a obtenção do óleo de tucumã de alta qualidade. O coração dessa inovação é a TucuExtract da Neo Plus, composto por um avançado sistema de extração. Equipado com tecnologia de ponta, a TucuExtract é capaz de processar o tucumã de forma precisa e eficiente, garantindo a obtenção de um óleo puro e valioso.',
      altLogo: 'Logo da Neo Extract',
      teamMembers: [
        'Ernesto Costa',
        'Diego Sato',
        'Marco Antonio',
        'Caio Machado',
        'Gabriel Tsuchiya',
        'Geovany Vieira',
        'Murilo Guimarães',
      ],
    },
    {
      solutionName: 'Inventory',
      teamLogo: InventoryLogo,
      solutionDescription:
        'Sistema Inteligente para o controle de Estoque de ONGs e pequenas empresas. Focado em soluções simples e modernização de processos tradicionais, fomentando as economias locais e os agentes do terceiro setor envolvidos.',
      altLogo: 'Logo da Inventory',
      teamMembers: ['João Kikuchi', 'Lucas Leal', 'Pedro Luz'],
    },
    {
      solutionName: 'Zenith Inova',
      teamLogo: ZenithLogo,
      solutionDescription:
        'A Zenith desenvolveu o Módulo Falken , composto por um leitor de frequência, associado a uma antena unidirecional, que será capaz de realizar a medição de potência dos sinais de rede 2G, 3G e 4G. Juntos, esses equipamentos se tornam um módulo de medição para as aeronaves remotamente pilotadas. Ou RPAS.',
      altLogo: 'Logo da Zenith Inova',
      teamMembers: [
        'Gabriel Oliveira',
        'Matheus Dourado',
        'Marco Pierozan',
        'Renan Canuto',
        'Rian Silva',
      ],
    },
    {
      solutionName: 'CVGreen',
      teamLogo: AmazonHacking,
      solutionDescription:
        'Aplicativo mobile de reconhecimento de troncos de árvores através de uma inteligência artificial.',
      altLogo: 'Logo da CVGreen',
      teamMembers: [
        'João Brito',
        'Alexander Cardoso',
        'Leonardo Arero',
        'Nailton Sampaio',
      ],
    },
    {
      solutionName: 'Hélix',
      teamLogo: HelixLogo,
      solutionDescription:
        'A Hélix apresenta o S.M.H.B.C (Sistema de monitoramento hídrico de baixo custo), um sistema modular que tem por objetivo, facilitar a implementação em larga escala de equipamentos que consigam coletar dados sobre a qualidade da água. O projeto foi desenvolvido para ser altamente modular, podendo os sensores instalados serem facilmente trocados para se adequar a necessidade de cada cliente. Além disso, o protótipo consegue atingir os requisitos para fazer parte da RNQA (Rede Nacional de Monitoramento de Qualidade da Água), proposto pela Agência nacional de águas, que tem por objetivo fornecer informações sobre a qualidade dos recursos hídricos em todo o território nacional.',
      altLogo: 'Logo da Hélix',
      teamMembers: [
        'Lucas Amorim',
        'Rômulo Córdova',
        'Fernando Otavio',
        'Antonio Bernardo',
      ],
    },
    {
      solutionName: 'Parajás',
      teamLogo: ParajasLogo,
      solutionDescription:
        'A empresa Parajás apresenta a Ceuci, uma máquina inovadora desenvolvida para otimizar a produção de papel a partir da folha de bananeira na Ilha de Cotijuba, objetivando minimizar as dificuldades em seu processo de confecção, que são a sua demora e a segurança na produção manual do papel de folha de bananeira. Dessa forma, a Ceuci irá automatizar o corte do pseudocaule da bananeira, um processo de corte eficiente e rápido, eliminando a necessidade de realizar essa tarefa manualmente. A Ceuci também oferece uma experiência segura para os usuários, diminuindo os riscos associados ao manuseio manual de ferramentas cortantes. Diante disso, Parajás orgulha-se em oferecer essa solução inovadora, que promove eficiência, segurança e oportunidades de crescimento para a comunidade. Acesse https://parajas.com.br para saber mais.',
      altLogo: 'Logo da Parajás',
      teamMembers: [
        'Ryan Oliveira',
        'Letícia Malato',
        'Letícia Lima',
        'Vinícius Casanova',
        'Miguel Angelim',
      ],
    },
    {
      solutionName: 'Cotico',
      teamLogo: CoticoLogo,
      solutionDescription:
        'O Cotico é um aplicativo com o objetivo de incentivar a reciclagem e recompensar os usuários com "pets" (badges) a cada vez que eles reciclam utilizando o aplicativo.',
      altLogo: 'Logo da Cotico',
      teamMembers: [
        'Caio Soares',
        'Vinicius Rayol',
        'Luiz Pina',
        'Pedro Raiol',
        'Lucas Borges',
      ],
    },
    {
      solutionName: 'Curumin',
      teamLogo: AranduLogo,
      solutionDescription:
        'Curumim é um software acessível e simples para a catalogação, empréstimo e devolução de livros utilizando o sistema open source Biblivre integrado a tecnologia RFID.',
      altLogo: 'Logo da Arandu Technology',
      teamMembers: ['Bruna Melido', 'Isadora Lacerda', 'Ícaro Macedo'],
    },
    {
      solutionName: 'BioTank',
      teamLogo: AmazonHacking,
      solutionDescription:
        'BioTank e um projeto que visa fornecer um fonte de gás de cozinha limpa e sustentável para os habitantes da ilha das Onças.',
      altLogo: 'Logo do Amazon Hacking',
      teamMembers: [
        'Thiago Silva',
        'Arthur Oliveira',
        'Amora Paixão',
        'Igor Matsumoto',
        'Muriel Silva',
      ],
    },
    {
      solutionName: 'SICFAA',
      teamLogo: AmazonHacking,
      solutionDescription:
        'Primeira instância de um projeto de tratamento de água para irrigação, no qual foi feito a criação de um sistema inteligente de captação, filtragem e armazenamento de água (SICFAA)',
      altLogo: 'Logo do Amazon Hacking',
      teamMembers: [
        'Felipe Ramos',
        'Letícia Macedo',
        'Pedro Melo',
        'Vitor Pombo',
        'Vitor Ramôa',
      ],
    },
    {
      solutionName: 'AutoDrops',
      teamLogo: AmazonHacking,
      solutionDescription:
        'Um sistema de irrigação automatizado, para aqueles que não tem tempo de cuidar das suas plantinhas na varanda da casa ou aqueles que vivem da produção.',
      altLogo: 'Logo do Amazon Hacking',
      teamMembers: [
        'Fabio Neves',
        'João Cardoso',
        'Marco Aurélio',
        'Newton Miranda',
        'João Beltrão',
      ],
    },
  ]

  const videoURL: string[] = [
    'https://www.youtube-nocookie.com/embed/dkNim396gew',
    'https://www.youtube-nocookie.com/embed/u9OdNekTEJY',
    'https://www.youtube-nocookie.com/embed/6-2nxIQUSSI',
    'https://www.youtube-nocookie.com/embed/bJhPNFamNwk',
    'https://www.youtube-nocookie.com/embed/XWMRPfiLbHM',
    'https://www.youtube-nocookie.com/embed/PuRcj4yvfso',
    'https://www.youtube-nocookie.com/embed/mnj4CZ-BISM',
    'https://www.youtube-nocookie.com/embed/kvDKIRHMshM',
    'https://www.youtube-nocookie.com/embed/djD7vOYDc9w',
    '',
    'https://www.youtube-nocookie.com/embed/Rz6ecyAGyRw',
    'https://www.youtube-nocookie.com/embed/Q-fDlpqaWDA',
  ]

  return (
    <div
      className={cn(
        'relative flex flex-col w-[237px] h-[310px] flex-shrink-0 bg-white rounded-[35px] items-center justify-between gap-[10px] px-6 py-6 before:rounded-[35px] before:absolute before:bg-gradient-to-b before:inset-0 before:to-[60%] after:absolute after:inset-[1px] after:bg-white after:rounded-[35px] md:w-[310px] md:h-[375px] md:py-[52px] lg:w-[21.6vw] lg:max-w-[310px] winner-card-shadow',
        idx === 0 &&
          'before:from-[#FFFF00] w-[260.7px] h-[341px] md:w-[341px] md:h-[412.5px] lg:w-[23.76vw]',
        idx === 0 &&
          currentYear[1] &&
          course === 'eng' &&
          'before:from-secondary-400',
        idx === 1 && 'before:from-[#263238]',
        idx === 2 && 'before:from-[#CD7F32]',
        className
      )}
      {...props}
    >
      <div className='flex flex-col gap-[10px] z-10'>
        <Image
          src={
            course === 'eng' && currentYear[1] ? ZenithTrophy : FirstPlaceWinner
          }
          alt='First Place Trophy'
          className={cn(idx !== 0 && 'hidden')}
        />
        <Image
          src={SecondPlaceWinner}
          alt='Second Place Trophy'
          className={cn(idx !== 1 && 'hidden')}
        />
        <Image
          src={ThirdPlaceWinner}
          alt='Third Place Trophy'
          className={cn(idx !== 2 && 'hidden')}
        />
        <span className='text-black text-18 font-medium tracking-[0.216px] text-center z-10'>
          {idx === 0 ? '1° Lugar' : idx === 1 ? '2° Lugar' : '3° Lugar'}
        </span>
      </div>
      <div className='relative flex items-center justify-center text-black'>
        <h1
          className={cn(
            'absolute font-bold text-36 leading-[1.1] text-center z-10 transition-opacity duration-300',
            !currentYear[0] && 'pointer-events-none opacity-0'
          )}
        >
          {children[0]}
        </h1>
        <h1
          className={cn(
            'absolute font-bold text-36 leading-[1.1] text-center z-10 transition-opacity duration-300',
            !currentYear[1] && 'pointer-events-none opacity-0'
          )}
        >
          {children[1]}
        </h1>
      </div>
      <ProjectOverlay
        variant='past'
        videoURL={
          videoURL[
            (currentYear[0] ? idx : idx + 3) + (course === 'sci' ? 6 : 0)
          ]
        }
        overlayTrigger={<Button className='z-10'>Conheça a Solução</Button>}
      >
        {
          childrenData[
            (currentYear[0] ? idx : idx + 3) + (course === 'sci' ? 6 : 0)
          ]
        }
      </ProjectOverlay>
    </div>
  )
}

export default WinnerCard
