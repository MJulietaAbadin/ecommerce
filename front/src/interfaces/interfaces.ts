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
    products?: IProduct[];
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    user: IUser;
    products: IProduct[];
}

export interface ICreateOrder {
    userId: number;
    products: number[];
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

export interface IProductcardProps {
    product: IProduct;
}

export interface IProductsGridProps {
    products: IProduct[];
    title?: string | undefined
}

export interface ICartContextType {
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (productId: number) => void;
    total: number;
    proceedToCheckout: () => void; 
}
export interface ICartGridProps {
    product: IProduct;
    remove?: () => void
}

export interface IUserResponse {
    login: boolean
    user: Partial<IUser> | null
    token: string
}

export interface IUserSession {
    user: {
        id: number
        status: string
        date: Date
        products: IProduct[]
    }
}

export interface IUserContextType {
    user: Partial<IUserResponse> | null
    setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void
    signIn: (userCredential : ILogin) => Promise<boolean>
    signUp: (user: Omit<IUser, "id">) => Promise<boolean>
    logOut: () => void
}

export interface ITitle{
    title: string | undefined
}

export interface ITitleProductsGrid {
    title: ITitle
}


export interface IButtonProps {
    content: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
    redirectTo?: string;
}

export interface ILogoProps {
    w: number
    h:number
}