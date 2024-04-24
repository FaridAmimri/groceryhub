/** @format */

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ProductType } from '@/types/types'

const ProductItem = ({ product }: { product: ProductType }) => {
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer'>
      <Image
        src={product.img}
        width={500}
        height={200}
        alt={product.name}
        className='h-[200px] w-[200px] object-contain'
      />
      <h2 className='font-bold text-lg'>{product.name}</h2>
      <div className='flex gap-3'>
        {product.discount && (
          <h2 className='font-bold text-lg'> {product.discount} €</h2>
        )}
        <h2
          className={`font-bold text-lg ${
            product.discount && 'line-through text-gray-500'
          }`}
        >
          {product.price} €
        </h2>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='text-primary hover:text-white hover:bg-primary'
          >
            Add to cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              {/* <ProductItemDetail product={product} /> */}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductItem
