import { createContext, useState } from "react";
import { IAuthContext, IAuthCOntextProviderProps, IoginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Iitem } from "../pages/login/types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);


export const AuthContextProvider = ({children}: IAuthCOntextProviderProps) => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: IoginData) => {
        try {
              const { data } = await api.get("/users", {
                params: {
                  email: loginData.email.trim(),
                },
              });
        
              const user = data.find(
                (item: Iitem) => item.senha === loginData.password.trim()
              );
        
              console.log("Retorno api", data);
              console.log("Usuário encontrado:", user);
        
              if (user) {
                navigate("/feed");
              } else {
                alert("Email ou senha inválidos");
              }
            } catch (error) {
              console.log(error);
              alert("Houve um erro, tente novamente.");
            }
    }

    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}


