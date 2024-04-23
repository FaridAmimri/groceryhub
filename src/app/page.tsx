/** @format */

import Image from 'next/image'
import Slider from '@/app/components/Slider'
import CategoryList from '@/app/components/CategoryList'

export default function Home() {
  return (
    <main className='p-10 px-16'>
      <Slider />
      <CategoryList />
    </main>
  )
}
