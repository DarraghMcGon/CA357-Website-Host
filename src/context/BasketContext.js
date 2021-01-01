import React, { useContext, useState } from 'react'

const BasketContext = React.createContext()
const UpdateBasketContext = React.createContext()

export function useBasket(){
    return useContext(BasketContext)
}

export function useBasketUpdate(){
    return useContext(UpdateBasketContext)
}

export function BasketProvider({ children }) {
    const [basketState, setBasketState] = useState([])

    function changeBasket(basket) {
        setBasketState(basket)
    }

    return (
        <BasketContext.Provider value={basketState}>
            <UpdateBasketContext.Provider value={changeBasket}>
                {children}
            </UpdateBasketContext.Provider>
        </BasketContext.Provider>
    )
}
