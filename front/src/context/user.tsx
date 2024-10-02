"use client";
import { createContext, useEffect, useState } from "react";
import { ILogin, IOrder, IUserResponse, IUserContextType, IUser } from "@/interfaces/interfaces";
import { postSignIn, postSignUp } from "@/lib/server/fetchUsers";
import { getOrders } from "@/lib/server/fetchOrders"; 

export const UserContext = createContext<IUserContextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  signIn: async () => false,
  signUp: async () => false,
  logOut: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const fetchUserOrders = async (token: string) => {
    try {
      await getOrders(token);
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
    }
  };

  const signIn = async (credentials: ILogin) => {
    try {
      const data = await postSignIn(credentials);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);

      await fetchUserOrders(data.token);

      setIsLogged(true);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const signUp = async (user: Omit<IUser, "id">): Promise<boolean> => {
    try {
      const data = await postSignUp(user);
      if (data.id) {
        await signIn({ email: user.email, password: user.password });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsLogged(false);
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
      fetchUserOrders(token); 
    }
  }, [user]);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLogged(true);

      const token = localStorage.getItem("token");
      if (token) {
        fetchUserOrders(token); 
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
