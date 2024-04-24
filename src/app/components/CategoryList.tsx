/** @format */

import { CategoryType } from '@/types/types'
import { getData } from '@/utils/getData'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = async () => {
  const categoryList: CategoryType[] = await getData('categories')

  return (
    <div className='mt-10'>
      <h2 className='text-green-600 font-bold text-2xl'>Shop by Category</h2>
      <div
        className='grid grid-cols-2 sm:grid-cols-4
   md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'
      >
        {categoryList?.map((category) => (
          <Link
            key={category.id}
            href=''
            className='flex flex-col 
          items-center bg-green-50 
          gap-2 p-3 rounded-lg group cursor-pointer
          hover:bg-green-600'
          >
            <Image
              src={category.icon}
              alt='icon'
              width={50}
              height={50}
              className='group-hover:scale-125 transition-all ease-in-out'
            />
            <h2 className='text-green-800 group-hover:text-white'>
              {category.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
