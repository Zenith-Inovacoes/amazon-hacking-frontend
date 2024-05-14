import { Meta, StoryObj } from '@storybook/react'
import Unlogged from './Unlogged'
import Logged from './Logged'
import Dandan from 'public/images/TesteMenu/Daniel.png'

const meta: Meta = {
  title: 'Components/Molecules/Menu',

  argTypes: {
    'Unlogged Menu': {
      description:
        'Variante do componente Menu para quando o usuário não está conectado em nenhuma conta Google.',
    },
    'Logged Menu': {
      description:
        'Variante do componente Menu para quando o usuário está conectado em uma conta Google.',
    },
  },

  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const UnloggedMenu: Story = {
  render: () => {
    return <Unlogged />
  },
}

export const LoggedMenu: Story = {
  render: () => {
    return (
      <Logged
        name={'Daniel Pinheiro Marcelino de Oliveira'}
        email={'daniel22300012@aluno.cesupa.br'}
        image={Dandan.src}
      />
    )
  },
}
