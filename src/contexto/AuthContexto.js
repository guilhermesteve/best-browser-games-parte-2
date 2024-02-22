import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {


    const [authData, setAuthData] = useState({
        token: null,
        name: null,
        email: null,
        dataNascimento: null,
        roles: null
    })

    useEffect(() => {
        const token = localStorage.getItem("token") 

        if(token){
            const  tokenDecoded = jwtDecode(token)

            fetch('https://api-best-browser-games.vercel.app/users/'+ tokenDecoded.id )
            .then(async response => {
                if(!response.ok){
                    throw new Error("problema ao buscar usuario!")
                }

                const resultado = await response.json()

                setAuthData((prev) => ( { ...prev, token,  ...tokenDecoded }))
                console.log(resultado)


            }).catch(error => console.log("erro ao buscar cliente"))
            
        }   

    }, [])

    const login = (token, dadosUsuario) => {
        localStorage.setItem("token", token)

        const  tokenDecoded = jwtDecode(token)

        fetch('https://api-best-browser-games.vercel.app/users/'+ tokenDecoded.id )
        .then(async response => {
            if(!response.ok){
                throw new Error("problema ao buscar usuario!")
            }

            const resultado = await response.json()

            setAuthData((prev) => ( { ...prev, token,  ...tokenDecoded }))
            console.log(resultado)


        }).catch(error => console.log("erro ao buscar cliente"))

        setAuthData({ token, ...dadosUsuario })
    }

    const logout = () => {
        localStorage.removeItem("token")
        setAuthData({
            token: null,
            nome: null,
            email: null,
            dataNascimento: null,
            roles: null
        })
    }

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}