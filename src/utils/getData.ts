import { publicRequest } from '@/utils/request'


export const getData = async (api: string) => {
    const res = await fetch(publicRequest + api, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error('Failed')
    }

    return res.json()
}