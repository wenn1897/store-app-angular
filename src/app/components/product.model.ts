export interface Product {
    id: string;
    title: string;
    price: number;
    description: {
        color: string;
        talla: string;
    }
    image: string;
}