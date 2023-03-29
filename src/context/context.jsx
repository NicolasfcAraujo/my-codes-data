import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [columnsNumber, setColumnsNumber] = useState(2)
    const [page, setPage] = useState()

    const handleCheckWidth = () => {
        if (window.innerWidth < 700) {
            setColumnsNumber(1)
        } else {
            setColumnsNumber(2)
        }
    }

    useEffect(() => handleCheckWidth, [])
    useEffect(() => {
        window.addEventListener("resize", () => handleCheckWidth)
    })
    return (
        <AppContext.Provider value={{columnsNumber,
                                     page,
                                     setPage,
                                     }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}