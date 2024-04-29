/** @format */

import { signIn } from '@/utils/auth'
import { Button } from '@/components/ui/button'

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <Button type='submit' className='w-full bg-blue-500 hover:bg-blue-400'>
        Signin with Google
      </Button>
    </form>
  )
}

export default GoogleSignIn
