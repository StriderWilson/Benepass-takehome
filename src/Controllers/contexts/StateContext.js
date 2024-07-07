import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, values }) => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: {
            first: '1232',
            second: '2223',
            third: '4432',
            fourth: '1732'
        },
        expirationDate: '8/28',
        cvc: '345',
        zip: '66062',
    });

    const state = {
        cardDetails,
        ...values,
    };

    return (
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    )
};