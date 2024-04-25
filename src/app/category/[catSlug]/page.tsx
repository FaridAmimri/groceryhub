/** @format */

import { getData } from '@/utils/getData'
import ProductList from '@/app/components/ProductList'
import { CategoryType } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

const CategoryPage = async ({ params }: { params: { catSlug: string } }) => {
  const catSlug = params.catSlug
  const categoryList: CategoryType[] = await getData('categories')

  return (
    <div>
      <h2
        className='p-4 bg-primary text-white font-bold
  text-3xl text-center mb-5'
      >
        {catSlug}
      </h2>
      {/* Category List */}
      <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center'>
        {categoryList.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`flex flex-col 
                items-center bg-green-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-green-600
                w-[150px] min-w-[100px]
                ${catSlug == category.slug && 'bg-green-600 text-white'}
                `}
          >
            <Image
              src={category.icon}
              width={50}
              height={50}
              alt='icon'
              className='group-hover:scale-125 transition-all ease-in-out'
            />
            <h2
              className={`text-green-800 group-hover:text-white
                    ${catSlug == category.slug && ' text-white'}
                    `}
            >
              {category.title}
            </h2>
          </Link>
        ))}
      </div>

      {/* Product List By Category */}
      <div className='p-5 md:p-10'>
        <ProductList catSlug={catSlug} />
      </div>
    </div>
  )
}

export default CategoryPage
