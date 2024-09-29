'use client'
import { CartContext } from '@/context/cart'
import { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/user';
import Button from '../Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


export default function AddToCart({ id }: { id: number }) {
    const { addToCart } = useContext(CartContext);
    const {isLogged} = useContext(UserContext)
    const router = useRouter(); 

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        if(!isLogged) {
            MySwal.fire({
                title: 'Hey!',
                text: 'You have to be logged in to add items to the cart',
                icon: 'warning'
              });
            router.push("/register")
            return
        }
        event.preventDefault();
        addToCart(id);
    }

    return (
        <div>
            <Button content='ADD TO CART' onClick={handleClick}></Button>
        </div>
    );
}
