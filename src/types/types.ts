export type CategoryType = {
    id: string;
    title: string;
    color: string;
    icon: string;
    slug: string;
}

export type SlideType = {
    id: string;
    name: string;
    image: string;
    type: string;
}

export type ProductType = {
    id: string;
    name: string;
    desc: string;
    img: string;
    weight: string;
    price: number;
    discount: number;
    isFeatured: boolean;
    category: string;
    catSlug: string;
}