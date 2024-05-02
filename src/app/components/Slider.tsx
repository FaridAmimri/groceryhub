/** @format */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { SlideType } from '@/types/types'
import { getData } from '@/utils/getData'
import Image from 'next/image'

const Slider = async () => {
  const sliderList: SlideType[] = await getData('slides')

  return (
    <Carousel>
      <CarouselContent>
        {sliderList?.map((slider) => (
          <CarouselItem key={slider.id}>
            <Image
              src={slider.image}
              alt='slider'
              width={1000}
              height={400}
              className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl '
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Slider
