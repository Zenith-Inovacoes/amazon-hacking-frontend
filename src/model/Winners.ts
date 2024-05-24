import { CourseEnum, IProject } from "@/types/IProject"

type Winners = IProject & {year: number}

export const publicWinners: Winners[]  = [
    {
        id: "1234",
        name: "Minerva",
        course: CourseEnum.ECOMP,
        description: "Drone terrestre para plantio automatizado da priprioca",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/minerva.jpeg",
        links: {
            github: "Minerva-33",
            youtube: {
                en: "https://www.youtube.com/embed/f2Xu5guID0w?si=MTN9MpN7xi77O52l",
                pt: "https://www.youtube.com/embed/OZxoGBYcSrE?si=wnKDWoBsNueAEo3w"
            }
        },
        team: ['Athos Andrade Silva de Araujo', "Fernanda Cordeiro Panzera", "Henrique Cabral Velloso da Silva", "Vinicius Eduardo Pereira Raiol", "Tiago Costa Harrop Medeiros"],
        year: 2023
    },
    {
        id: "1234",
        name: "EcoRota",
        course: CourseEnum.BCC,
        description: "A Ecorota é uma agência digital de ecoturismo comunitário nas ilhas de Belém, onde os turistas irão utilizar serviços das próprias ilhas, assim aprendendo mais sobre a cultura, comunidade e os problemas ambientais, com isso contribuindo para a economia local e a educação ambiental da região.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/ecorota.png",
        links: {
            github: "EcoRota",
            youtube: {
                en: "https://www.youtube.com/embed/64g5r67363Y?si=0AQz-Es40alTrRKQ",
                pt: "https://www.youtube.com/embed/79j9MbmaVHA?si=Ac_3wY6mV_ZY-LJT"
            }
        },
        team: ['João Cardoso', "Marco Aurélio", "Fábio Neves", "João Guilherme", "Luiz André"],
        year: 2023
    },
    {
        id: "1234",
        name: "Zenith Inova",
        course: CourseEnum.ECOMP,
        description: "A Zenith desenvolveu o Módulo Falken , composto por um leitor de frequência, associado a uma antena unidirecional, que será capaz de realizar a medição de potência dos sinais de rede 2G, 3G e 4G. Juntos, esses equipamentos se tornam um módulo de medição para as aeronaves remotamente pilotadas. Ou RPAS.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/ZenithLogoBranca.svg",
        links: {
            github: "RianErnesto",
            youtube: {
                en: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L",
                pt: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L"
            }
        },
        team: ['Rian Ernesto', "Gabriel Marcelino", "Matheus Dourado", "Marco Antonio", "Renan Andrew"],
        year: 2022
    },
    {
        id: "1234",
        name: "Zenith Inova",
        course: CourseEnum.BCC,
        description: "A Zenith desenvolveu o Módulo Falken , composto por um leitor de frequência, associado a uma antena unidirecional, que será capaz de realizar a medição de potência dos sinais de rede 2G, 3G e 4G. Juntos, esses equipamentos se tornam um módulo de medição para as aeronaves remotamente pilotadas. Ou RPAS.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/ZenithLogoBranca.svg",
        links: {
            github: "RianErnesto",
            youtube: {
                en: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L",
                pt: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L"
            }
        },
        team: ['Rian Ernesto', "Gabriel Marcelino", "Matheus Dourado", "Marco Antonio", "Renan Andrew"],
        year: 2022
    },
    
]