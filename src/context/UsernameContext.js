import React, { useContext, useState } from 'react'

const UsernameContext = React.createContext()
const UpdateUsernameContext = React.createContext()

export function useUsername(){
    return useContext(UsernameContext)
}

export function useUsernameUpdate(){
    return useContext(UpdateUsernameContext)
}

export function UsernameProvider({ children }) {
    const [usernameState, setUsernameState] = useState("")

    function changeUsername(username) {
        setUsernameState(username)
    }

    return (
        <UsernameContext.Provider value={usernameState}>
            <UpdateUsernameContext.Provider value={changeUsername}>
                {children}
            </UpdateUsernameContext.Provider>
        </UsernameContext.Provider>
    )
}
