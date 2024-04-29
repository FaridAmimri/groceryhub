/** @format */

import { signIn } from '@/utils/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const EmailLink = () => {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('resend', formData)
      }}
      className='flex flex-col gap-2'
    >
      <Input type='text' name='email' placeholder='name@example.com' />
      <Button type='submit'>Signin with Email Link</Button>
    </form>
  )
}

export default EmailLink
