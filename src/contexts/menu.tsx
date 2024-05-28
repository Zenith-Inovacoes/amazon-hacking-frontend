'use client'

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'

type menuProviderProps = {
    children: ReactNode
}

type menuContextData = {
    open: boolean
    handleOpenChange: () => void
    setOpen: (state: boolean | ((state: boolean) => boolean)) => void
}

export const MenuContext = createContext({} as menuContextData)

const MenuProvider = ({ children }: menuProviderProps) => {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflowY = open ? 'hidden' : 'unset'
    }, [open])

    const handleOpenChange = () => {
        setOpen((currState) => !currState)
    }

    return (
        <MenuContext.Provider value={{ open, handleOpenChange, setOpen }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => {
    const context = useContext<menuContextData>(MenuContext)

    if (!context)
        throw new Error('useMenu has to be used inside a MenuProvider')

    return context
}

export default MenuProvider
