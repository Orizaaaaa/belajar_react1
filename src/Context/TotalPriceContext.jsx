import { createContext, useContext, useReducer } from "react";

//variable untuk menyimpan state
const TotalPriceContext = createContext()

//variable untuk menyimpan action" nya
const TotalPriceDispatchContext = createContext()


const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            }
        }
        default: {
            throw Error("Unknown Action" + action.type)
        }
    }
}


export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 })
    return (
        <TotalPriceContext.Provider value={totalPrice} >
            <TotalPriceDispatchContext.Provider value={dispatch} >
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPriceContext.Provider>
    )

}


// HOOK
export function useTotalPrice() {
    return useContext(TotalPriceContext)
}

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatchContext)
}