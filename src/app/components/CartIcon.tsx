/** @format */

'use client'

import { useCartStore } from '@/utils/store'
import { ShoppingBasket, TrashIcon } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const CartIcon = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore()
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger>
        <h2 className='flex gap-2 items-center text-lg'>
          <ShoppingBasket />
          <span className='bg-primary text-white  px-2 rounded-full'>
            {totalItems}
          </span>
        </h2>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle
            className='bg-primary
                text-white font-bold text-lg p-2 w-[90%] self-center'
          >
            My Cart
          </SheetTitle>
          <SheetDescription>
            <div className='h-[500px] overflow-auto'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='flex justify-between items-center p-2 mb-5'
                >
                  <div className='flex gap-6 items-center'>
                    <Image
                      src={product.img!}
                      width={90}
                      height={90}
                      alt={product.title}
                      className='border p-2'
                    />
                    <div>
                      <h2 className='font-bold'>{product.title}</h2>
                      <h2 className=''>Quantity {product.quantity}</h2>
                      <h2 className='text-lg font-bold'>{product.price} €</h2>
                    </div>
                  </div>
                  <TrashIcon
                    className='cursor-pointer'
                    onClick={() => removeFromCart(product)}
                  />
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetClose asChild>
          <div className='absolute w-[90%] bottom-6 flex flex-col bg-white'>
            <h2 className='text-lg font-bold flex justify-between'>
              Subtotal
              <span>{totalPrice} €</span>
            </h2>
            <Button
              disabled={products.length === 0}
              onClick={() => router.push(session ? '/' : '/sign-in')}
            >
              Checkout
            </Button>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default CartIcon
