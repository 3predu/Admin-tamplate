import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface appContextProps{
    tema?: Tema
    alternarTema?: () => void

}

const AppContext = createContext<appContextProps>({})

export function AppProvider(props){
    const [tema, setTema] = useState<Tema>('dark')

    function alternarTema(){
        setTema( tema === '' ? 'dark' : '') // condição tema
    }

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