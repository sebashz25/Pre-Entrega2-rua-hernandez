import { useContext, createContext, useState}    from "react";

const DarkModeContext = createContext() //crear mi contexto

export const useDarkModeContext=()=> useContext(DarkModeContext)

export const DarkModeProvider =(props)=> {
    const [darkMode, setDarkMode] = useState(false) // booleano para definir el modo oscuroo de mi api...
    
    const toggleDarkMode=() =>{
        setDarkMode(!darkMode) // si darkmode es V lo pasa a f y viceversa
        if(!darkMode){
            document.body.firstElementChild.classList.add('darkmode')
        }else{
            document.body.firstElementChild.classList.remove('darkmode')
        }
    }

    return(
       <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
       </DarkModeContext.Provider>
    )
}