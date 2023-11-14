//pembuatan dark mode dengan create context
import { createContext, useState } from "react";


const DarkModeContext = createContext()

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState([])
    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider





