import { ILogin, IRegister } from "@/interfaces/interfaces";

export const postSignUp = async (user: IRegister) => {
    try {
        const response = await fetch('http://localhost:5001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
    }
}

export const postSignIn = async (userCredential: ILogin) => {
    try {
        const response = await fetch('http://localhost:5001/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userCredential),
        });

        // Comprobar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;  // O puedes lanzar un error para manejarlo más arriba
    }
};
