import { useState, useContext, createContext } from 'react';

const layoutTitleContext = createContext(null);
const setLayoutTitleContext = createContext(null);

export const useLayoutTitle = () => {
    return useContext(layoutTitleContext);
};

export const useSetLayoutTitle = () => {
    return useContext(setLayoutTitleContext);
};

export const LayoutTitleProvider = ({ children }) => {
    const [layoutTitle, setLayoutTitle] = useState('Welcome to MyAnimeList.net!');

    return (
        <layoutTitleContext.Provider value={layoutTitle}>
            <setLayoutTitleContext.Provider value={setLayoutTitle}>
                {children}
            </setLayoutTitleContext.Provider>
        </layoutTitleContext.Provider>
    );
};
