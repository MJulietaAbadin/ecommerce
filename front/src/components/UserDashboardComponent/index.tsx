'use client'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/user';
import { useRouter } from 'next/navigation';
import { IOrder } from '@/interfaces/interfaces';
import { getOrders } from '@/lib/server/fetchOrders';

export default function UserDashboardComponent() {
  const router = useRouter();
  const { user, logOut } = useContext(UserContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    logOut();
    router.push("/");
  };

  const [orders, setOrder] = useState<IOrder[]>([]);

  const fetchData = async () => {
    const orderResponse = await getOrders(user?.token!);
    setOrder(orderResponse);
  };

  useEffect(() => {
    if (user?.user?.name) {
      user.user.name === undefined ? router.push('/login') : fetchData();
    }
  }, [user?.user]);

  let counter = 1;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className="min-h-screen text-white p-8 pt-16">
      <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-pageColor"> Welcome, {user?.user?.name ? capitalizeFirstLetter(user.user.name) : ''}!</h2>
        <p className="mb-2">Your dashboard is your central hub for managing your account and orders.</p>
        <p className="mb-4">This is your email: <span className="font-semibold">{user?.user?.email}</span></p>
        <button
          onClick={handleClick}
          className="bg-logOutButton hover:bg-logOutButtonHover text-white font-semibold py-2 px-4 rounded-3xl transition duration-300 w-40"
        >
          Log Out
        </button>
      </div>

      <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-pageColor">YOUR ORDERS</h3>
        {orders && orders.length > 0 ? (
          orders.map((order: IOrder) => (
            <div key={order.id} className="mb-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg">
              <p className="text-lg font-medium">Order n°{counter++}</p>
              <p className="text-sm mb-1">{new Date(order.date)?.toLocaleDateString()}</p>
              <p className="text-sm uppercase tracking-wider font-bold text-green-400">{order.status.toLocaleUpperCase()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">You haven't placed any orders yet.</p>
        )}
      </div>
    </div>
  );
}
