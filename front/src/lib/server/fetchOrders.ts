export async function createOrder(token: string | null, products:number[]) {
    try {
        const response = await fetch("http://localhost:5001/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({products})
        })
        if(response.ok) {
            console.log('success')
            return response
        } else {
            console.log('error')
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getOrders (token: string) {
    try {
        const response = await fetch ("http://localhost:5001/users/orders", {
            method: "GET",
            cache:"no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        })
        const orders = await response.json()
        return orders
    } catch (error) {
        console.log(error);
        
    }
}