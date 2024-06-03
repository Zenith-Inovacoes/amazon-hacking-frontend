import ODSs from "."
import { StoryObj, Meta } from "@storybook/react"

export default {
    decorators: [
        (Story) => 
        <div>
            <div className="h-screen grid place-items-center text-60 font-bold text-black text-center text-balance leading-62">
                Role a página para baixo para ver a animação
            </div>
            <Story />
        </div>
    ],
    title: "Components/Templates/ODSs",
    component: ODSs
} as Meta<typeof ODSs>

type Story = StoryObj<typeof ODSs>

const Template = () => <ODSs label='Explore soluções inovadoras' ODS='Objetivos de Desenvolvimento Sustentável' subtitle='Durante a jornada, equipes multidisciplinares da 3ª Edição do Amazon Hacking desenvolveram projetos que abordam problemas reais e oferecem soluções práticas com impacto positivo.'/>;

export const Default = Template.bind({});