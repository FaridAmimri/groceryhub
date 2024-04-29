/** @format */

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoaderIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { toast } from 'sonner'
import { signIn } from '@/utils/auth'
import GoogleSignIn from '@/app/components/GoogleSignIn'
import EmailLink from '@/app/components/EmailLink'
import { useSession } from 'next-auth/react'

const SignInPage = () => {
  // const [email, setEmail] = useState('')

  // const router = useRouter()
  // const [loader, setLoader] = useState()

  return (
    <div className='flex items-baseline justify-center my-20'>
      <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200'>
        <h2 className='font-bold text-2xl'>Sign In to Your Account</h2>
        <h3 className='text-gray-500 mt-2'>Use Google account or Email link</h3>
        <div className='w-full flex flex-col gap-5 mt-7'>
          <GoogleSignIn />
          {/* <Button onClick={() => signIn('google')} className='bg-blue-600'>
            Sign in with Google
          </Button> */}

          <div className='flex justify-around items-center'>
            <hr className='border-black border w-full' />
            <span className='text-gray-400 px-2'>or</span>
            <hr className='border-black border w-full' />
          </div>

          <EmailLink />
          {/* <Input
            placeholder='name@example.com'
            // onChange={(e) => setEmail(e.target.value)}
          /> */}
          {/* <Button disabled={!email}>
            {loader ? <LoaderIcon className='animate-spin' /> : 'Email Link'}
          </Button> */}
        </div>
      </div>
    </div>
  )
}

export default SignInPage
