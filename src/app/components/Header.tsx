/** @format */

import Image from 'next/image'
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  CircleUserRound,
  LayoutGrid,
  Search,
  SearchIcon,
  ShoppingBag,
  ShoppingBasket
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
// import { publicRequest } from '@/utils/request'
import { CategoryType } from '@/types/types'
import Link from 'next/link'
// import { useSession, signOut } from 'next-auth/react'
import { auth, signOut } from '@/utils/auth'
import { getData } from '@/utils/getData'
import CartIcon from './CartIcon'

const Header = async () => {
  // const { status, data: session } = useSession()
  const session = await auth()

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: () => fetch(publicRequest + 'categories').then((res) => res.json())
  // })
  const categoryList: CategoryType[] = await getData('categories')

  return (
    <header className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={150} height={150} priority />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer'>
              <LayoutGrid className='h-5 w-5' />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList?.map((category: CategoryType) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <DropdownMenuItem className='flex gap-2 items-center cursor-pointer'>
                  <Image
                    src={category.icon}
                    alt='icon'
                    width={25}
                    height={25}
                  />
                  <h2 className='text-md'>{category.title}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type='text' placeholder='Search' className='outline-none' />
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <CartIcon />
        {!session ? (
          <Link href='/sign-in'>
            <Button>Login</Button>
          </Link>
        ) : (
          <Popover>
            <PopoverTrigger>
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt='profile-image'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              ) : (
                <Image
                  src={
                    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                  }
                  alt='profile-image'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              )}
            </PopoverTrigger>
            <PopoverContent className='w-44'>
              <ul className='flex  flex-col gap-2'>
                <Link
                  href={'/my-booking'}
                  className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'
                >
                  My orders
                </Link>
                <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                  <form
                    action={async () => {
                      'use server'
                      await signOut()
                    }}
                  >
                    <button type='submit'>Logout</button>
                  </form>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </header>
  )
}

export default Header
