/** @format */

'use client'

import { useCartStore } from '@/utils/store'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

const CartIcon = () => {
  const { totalItems } = useCartStore()

  return (
    <Link href='/cart' className='flex gap-2 items-center text-lg'>
      <ShoppingBag />
      <span>{totalItems}</span>
    </Link>
  )
}

export default CartIcon
