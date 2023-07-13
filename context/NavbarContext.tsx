import { ReactNode, createContext, useContext, useState } from "react";

interface Props{
    children: ReactNode
}

export const NavbarContext = createContext({
    isMenuActive:false,
    setMenuActive: (_value:boolean) => {}
})

export const NavbarProvider = ({children}:Props) =>{
    const [isMenuActive, setMenuActive] = useState(false)

    return(
        <NavbarContext.Provider value={{isMenuActive,setMenuActive}}>
        {children}
        </NavbarContext.Provider>
    )
}

export const useNavbarContext = () =>{
    const context = useContext(NavbarContext)
    if(context === undefined){
        throw new Error('useNavbarProvider must be used within a NavbarProvider')
    }
    return context
}