/** @format */

import { prisma } from '@/utils/connect'
import { NextResponse } from 'next/server'


// FETCH ALL CATEGORIES
export const GET = async () => {
    try {
        const slides = await prisma.slide.findMany()
        return new NextResponse(JSON.stringify(slides), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({ message: 'Something went wrong' }),
            { status: 500 }
        )
    }
}
