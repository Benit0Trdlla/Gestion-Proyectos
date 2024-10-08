import { useState, createContext } from "react";

//Context para saber cuando se guardo un nuevo dato 
export const SavedContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function SavedContextProvider({ children }) {
    const [save, setSaved] = useState(false);

    return (
        <SavedContext.Provider value={{ save, setSaved }}>
            {children}
        </SavedContext.Provider>
    )
}