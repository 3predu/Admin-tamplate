import { createContext, useEffect, useState } from "react";

// type Tema = 'dark' | ''

interface appContextProps{
    tema?: string
    alternarTema?: () => void

}

const AppContext = createContext<appContextProps>({})

export function AppProvider(props){
    const [tema, setTema] = useState('dark')

    function alternarTema(){
        const novTema = tema === '' ? 'dark' : ''
        setTema(novTema) // condição tema
        localStorage.setItem('tema', novTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    }, [])

    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext