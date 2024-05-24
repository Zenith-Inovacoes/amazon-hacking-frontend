import { CourseEnum, IProject } from "@/types/IProject"

type Winners = IProject & {year: number}

export const publicWinners: Winners[]  = [
    {
        id: "1234",
        name: "Zenith Inova de Engenharia",
        course: CourseEnum.ECOMP,
        description: "Enim sit ea do irure reprehenderit consequat laboris voluptate. Voluptate ad do deserunt velit esse nisi minim amet irure. Sit consequat cupidatat labore exercitation et ullamco tempor non exercitation. Officia exercitation excepteur id amet officia. Duis anim mollit velit culpa Lorem sint est in dolore. Ipsum irure excepteur voluptate fugiat eu ad elit qui do velit tempor qui. Fugiat nisi dolore ut proident dolor sint duis.",
        logoUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        logoUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        logoUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        logoUrl: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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