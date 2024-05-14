import { Meta, StoryObj } from '@storybook/react'
// import Menu from '.'
// import { Suspense } from 'react'
import Unlogged from './Unlogged'
import Logged from './Logged'
import Dandan from 'public/images/TesteMenu/Daniel.png'

const meta: Meta = {
  title: 'Components/Molecules/Menu',
  // component: Menu,
  // decorators: [
  //   (Story) => (
  //     <div className='w-full h-full items-center justify-center flex'>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <Story />
  //       </Suspense>
  //     </div>
  //   ),
  // ],

  // tags: ['autodocs'],
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
