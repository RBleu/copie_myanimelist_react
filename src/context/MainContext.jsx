import { LoginProvider } from './LoginContext';
import { LayoutTitleProvider } from './LayoutTitleContext';

const MainProvider = ({ children }) => {
    return (
        <LoginProvider>
            <LayoutTitleProvider>{children}</LayoutTitleProvider>
        </LoginProvider>
    );
};

export default MainProvider;
