/** @format */
'use client'

import Image from 'next/image'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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
import { publicRequest } from '@/utils/request'
import { CategoryType } from '@/types/types'

const Header = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(publicRequest + 'categories').then((res) => res.json())
  })

  return (
    <header className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image src='/logo.png' alt='logo' width={150} height={150} priority />

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
            {data?.map((category: CategoryType) => (
              <DropdownMenuItem
                key={category.id}
                className='flex gap-2 items-center cursor-pointer'
              >
                <Image src={category.icon} alt='icon' width={25} height={25} />
                <h2 className='text-md'>{category.title}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden'>
          <Search />
          <input type='text' placeholder='Search' className='outline-none' />
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='flex gap-2 items-center text-lg'>
          <ShoppingBag />
          <span>0</span>
        </h2>
        <Button>Login</Button>
      </div>
    </header>
  )
}

export default Header
