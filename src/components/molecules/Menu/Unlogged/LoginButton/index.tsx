'use client'

import { Button } from '@/components/atoms'
import { signIn } from 'next-auth/react'

const LoginButton = () => {
  return (
    <Button variant='secondary' onClick={() => signIn()}>
      Fazer Login
    </Button>
  )
}

export default LoginButton
