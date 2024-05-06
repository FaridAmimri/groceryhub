/** @format */

'use client'
import { Button } from '@/components/ui/button'
import { LoaderCircle, ShoppingBasket } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { ProductType } from '@/types/types'
import { useCartStore } from '@/utils/store'
import { toast } from 'sonner'

const ProductCard = ({ product }: { product: ProductType }) => {
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(
    product.discount ? product.discount : product.price
  )
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(product.price)

  const router = useRouter()
  const { addToCart } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate() // Avoid rehydration error from SSR to CSR
  }, [])

  const handleClick = () => {
    addToCart({
      id: product.id,
      title: product.name,
      img: product.img,
      price: price * quantity,
      quantity: quantity
    })
    toast('Product added successfully')
  }

  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 p-7
  bg-white text-black'
    >
      <Image
        src={product.img}
        alt='image'
        width={300}
        height={300}
        className='bg-slate-200 p-5 h-[320px] 
      w-[300px] object-contain rounded-lg'
      />
      <div className='flex flex-col gap-3'>
        <h2 className='text-2xl font-bold'>{product.name}</h2>
        <h2 className='text-sm  text-gray-500'>{product.desc}</h2>
        <div className='flex gap-3 '>
          {product.discount && (
            <h2 className='font-bold text-3xl'>{product.discount} €</h2>
          )}
          <h2
            className={`font-bold text-3xl ${
              product.discount && 'line-through text-gray-500'
            }`}
          >
            {product.price} €
          </h2>
        </div>
        <h2 className='font-medium text-lg'>Quantity ({product.weight})</h2>
        <div className='flex flex-col items-baseline gap-3'>
          <div className='flex gap-3 items-center'>
            <div className='p-2 border flex gap-10 items-center px-5'>
              <button
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <h2>{quantity}</h2>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <h2 className='text-2xl font-bold'>
              = {(quantity * price).toFixed(2)} €
            </h2>
          </div>
          <Button
            className='flex gap-3'
            onClick={() => handleClick()}
            // disabled={loading}
          >
            <ShoppingBasket />
            {loading ? (
              <LoaderCircle className='animate-spin' />
            ) : (
              'Add To Cart'
            )}
          </Button>
        </div>
        <h2>
          <span className='font-bold'>Category: </span>
          {product.catSlug}
        </h2>
      </div>
    </div>
  )
}

export default ProductCard
