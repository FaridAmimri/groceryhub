/** @format */

import { prisma } from '@/utils/connect'
import { NextRequest, NextResponse } from 'next/server'


// FETCH ALL PRODUCTS BY CATEGORY OR WITHOUT
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        if (cat) {
            const products = await prisma.product.findMany({
                where: {
                    ...cat && { catSlug: cat }
                }
            })
            return new NextResponse(JSON.stringify(products), { status: 200 })
        }
        else {
            const products = await prisma.product.findMany()
            return new NextResponse(JSON.stringify(products), { status: 200 })
        }

    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500 }
        )
    }
}
