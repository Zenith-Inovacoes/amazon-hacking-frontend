import { CourseEnum, IProject } from "@/types/IProject"

type Winners = IProject & {year: number}

export const publicWinners: Winners[]  = [
    {
        id: "1234",
        name: "Zenith Inova de Engenharia",
        course: CourseEnum.ECOMP,
        description: "Enim sit ea do irure reprehenderit consequat laboris voluptate. Voluptate ad do deserunt velit esse nisi minim amet irure. Sit consequat cupidatat labore exercitation et ullamco tempor non exercitation. Officia exercitation excepteur id amet officia. Duis anim mollit velit culpa Lorem sint est in dolore. Ipsum irure excepteur voluptate fugiat eu ad elit qui do velit tempor qui. Fugiat nisi dolore ut proident dolor sint duis.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/minerva.jpeg",
        links: {
            github: "RianErnesto",
            youtube: {
                en: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L",
                pt: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L"
            }
        },
        team: ['Rian Ernesto', "Gabriel Marcelino", "Matheus Dourado", "Marco Antonio", "Renan Andrew"],
        year: 2023
    },
    {
        id: "1234",
        name: "Zenith Inova de Ciência",
        course: CourseEnum.BCC,
        description: "Enim sit ea do irure reprehenderit consequat laboris voluptate. Voluptate ad do deserunt velit esse nisi minim amet irure. Sit consequat cupidatat labore exercitation et ullamco tempor non exercitation. Officia exercitation excepteur id amet officia. Duis anim mollit velit culpa Lorem sint est in dolore. Ipsum irure excepteur voluptate fugiat eu ad elit qui do velit tempor qui. Fugiat nisi dolore ut proident dolor sint duis.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/minerva.jpeg",
        links: {
            github: "RianErnesto",
            youtube: {
                en: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L",
                pt: "https://www.youtube.com/embed/bJhPNFamNwk?si=yzDULKNAYEDdW61L"
            }
        },
        team: ['Rian Ernesto', "Gabriel Marcelino", "Matheus Dourado", "Marco Antonio", "Renan Andrew"],
        year: 2023
    },
    {
        id: "1234",
        name: "Zenith Inova 2022 Ecomp",
        course: CourseEnum.ECOMP,
        description: "Enim sit ea do irure reprehenderit consequat laboris voluptate. Voluptate ad do deserunt velit esse nisi minim amet irure. Sit consequat cupidatat labore exercitation et ullamco tempor non exercitation. Officia exercitation excepteur id amet officia. Duis anim mollit velit culpa Lorem sint est in dolore. Ipsum irure excepteur voluptate fugiat eu ad elit qui do velit tempor qui. Fugiat nisi dolore ut proident dolor sint duis.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/minerva.jpeg",
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
        name: "Zenith Inova 2022 BCC",
        course: CourseEnum.BCC,
        description: "Enim sit ea do irure reprehenderit consequat laboris voluptate. Voluptate ad do deserunt velit esse nisi minim amet irure. Sit consequat cupidatat labore exercitation et ullamco tempor non exercitation. Officia exercitation excepteur id amet officia. Duis anim mollit velit culpa Lorem sint est in dolore. Ipsum irure excepteur voluptate fugiat eu ad elit qui do velit tempor qui. Fugiat nisi dolore ut proident dolor sint duis.",
        logoUrl: "https://cdn.computacao-amostra.com/LogomarcaProjetos/minerva.jpeg",
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