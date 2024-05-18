'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type menuProviderProps = {
  children: ReactNode
}

type menuContextData = {
  open: boolean
  handleOpenChange: () => void
}

export const MenuContext = createContext({} as menuContextData)

const MenuProvider = ({ children }: menuProviderProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenChange = () => {
    setOpen((currState) => !currState)
    console.log('sdhfuisdf')
  }

  return (
    <MenuContext.Provider value={{ open, handleOpenChange }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext<menuContextData>(MenuContext)

  if (!context) throw new Error('useMenu has to be used inside a MenuProvider')

  return context
}

export default MenuProvider
