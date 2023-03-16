import { useState, useContext, createContext } from 'react';

const isLoggedInContext = createContext(null);
const setIsLoggedInContext = createContext(null);

export const useIsLoggedIn = () => {
    return useContext(isLoggedInContext);
};

export const useSetIsLoggedIn = () => {
    return useContext(setIsLoggedInContext);
};

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <isLoggedInContext.Provider value={isLoggedIn}>
            <setIsLoggedInContext.Provider value={setIsLoggedIn}>
                {children}
            </setIsLoggedInContext.Provider>
        </isLoggedInContext.Provider>
    );
};
