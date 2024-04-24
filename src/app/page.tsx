/** @format */

import Slider from '@/app/components/Slider'
import CategoryList from '@/app/components/CategoryList'
import ProductList from '@/app/components/ProductList'

export default function Home() {
  return (
    <main className='p-10 px-16'>
      <Slider />
      <CategoryList />
      <ProductList />
    </main>
  )
}
