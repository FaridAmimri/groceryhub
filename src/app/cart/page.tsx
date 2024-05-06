/** @format */
'use client'

import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { publicRequest } from '@/utils/request'
import { Button } from '@/components/ui/button'

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore()
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    useCartStore.persist.rehydrate() // Avoid rehydration error from SSR to CSR
  }, [])

  const handleCheckout = async () => {
    if (!session) {
      router.push('/sign-in')
    } else {
      try {
        const res = await fetch(publicRequest + 'orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            price: totalPrice,
            products: products,
            status: 'Not Paid',
            userEmail: session.user?.email
          })
        })
        const data = await res.json()
        console.log(data)
        router.push(`/pay/${data.id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row '>
      {/* Products Container */}
      <div className='h-1/2 p-6 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20'>
        {/* Product Item */}
        {products.map((product) => (
          <div
            className='flex items-center justify-between mb-4'
            key={product.id}
          >
            {product.img && (
              <Image src={product.img} alt='' width={100} height={100} />
            )}
            <h1 className='uppercase text-xl font-bold'>{product.title}</h1>
            <h2 className='font-bold'>{product.price} €</h2>
            <h3 className='font-bold'>{product.quantity} </h3>
            <span
              className='cursor-pointer'
              onClick={() => removeFromCart(product)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      {/* Payment Container */}
      <div className='h-1/2 p-4 bg-green-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Articles ({totalItems} produits)</span>
          <span className=''>{totalPrice} €</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Frais de service</span>
          <span className=''>0.00 €</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Livraison</span>
          <span className='text-green-500'>OFFERT</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-between'>
          <span className=''>TOTAL</span>
          <span className='font-bold'>{totalPrice} €</span>
        </div>
        <Button className='w-1/2 self-end' onClick={handleCheckout}>
          PAYER
        </Button>
      </div>
    </div>
  )
}

export default CartPage
