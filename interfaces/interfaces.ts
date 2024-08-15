export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    orders?: IOrder[];
}

export interface ICreateOrder {
    userId: number;
    products: number[];
}

export interface IOrder {
    id: number;
    status: string;
    date: string;
    user: IUser;
    products: IProduct[];
}

export interface IProductCardProps {
    product: IProduct;
}