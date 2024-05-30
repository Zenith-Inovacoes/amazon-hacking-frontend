import { Meta, StoryObj } from '@storybook/react'
import Skeleton from '.'
import { SkeletonProps } from './types'

export default {
    title: 'Components/Atoms/Skeleton',
    component: Skeleton,

    argTypes: {
        children: {
            description:
                'É capaz de receber elementos para maior personalização do componente, dependendo do seu uso',
        },
        Tamanho: {
            name: '',
            description:
                '<p className="whitespace-pre-line text-base"><b className="text-orange-400 italic text-xl">OBS</b>:\nEste componente <b className="text-orange-400">não</b> possui props personalizadas além do <i>children</i>. Qualquer mudança de tamanho do componente deve ser feita usando o seu <b className="text-orange-400">className</b></p>',
            table: {
                defaultValue: {
                    summary:
                        "className='bg-white w-96 h-44 max-w-full rounded-2xl animate-skeleton'",
                    detail: 'width: 384px\nheight: 176px\nmax-width: 100%\nborder-radius: 16px\nanimate-skeleton: "skeleton 1s linear infinite alternate"\nskeleton: {\n\tfrom: {\n\t\topacity: "0.6",\n\t},\n\tto: {\n\t\topacity: "0.2",\n\t},\n}',
                },
            },
            control: {},
        },
    },

    tags: ['autodocs'],
} as Meta<SkeletonProps>

type Story = StoryObj<SkeletonProps>

export const Default: Story = {}

export const CustomExample: Story = {
    render: () => {
        return (
            <Skeleton className='flex flex-col items-center gap-4 justify-start py-6 h-fit w-fit px-16'>
                <div className='bg-gray-200 rounded-full w-20 h-20' />
                <div className='flex flex-col w-52 h-fit gap-2'>
                    <div className='bg-gray-200 w-full h-3' />
                    <div className='bg-gray-200 w-full h-3' />
                    <div className='bg-gray-200 w-full h-3' />
                </div>
            </Skeleton>
        )
    },
}
