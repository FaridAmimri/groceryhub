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

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: string;
}

export type CartItemType = {
    id: string;
    title: string;
    img?: string;
    price: number;
    optionTitle?: string;
    quantity: number;
}

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
};

export type ActionTypes = {
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
    resetCart: () => void
}
