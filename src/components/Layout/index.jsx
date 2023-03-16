import { useState } from 'react';
import { useLayoutTitle } from '../../context/LayoutTitleContext';

import Header from '../Header';
import MobileMenu from '../MobileMenu';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './style.css';

const Layout = ({ children }) => {
    const [subMenuVisibility, setSubMenuVisibility] = useState(false);
    const layoutTitle = useLayoutTitle();

    return (
        <div id='wrapper' className='flex-center'>
            <div id='container' className={subMenuVisibility ? 'small-container' : ''}>
                <Header setSubMenuVisibility={setSubMenuVisibility} />
                <MobileMenu
                    subMenuVisibility={subMenuVisibility}
                    setSubMenuVisibility={setSubMenuVisibility}
                />
                <Navbar />
                <div id='layout-title'>{layoutTitle}</div>
                <div id='layout-content'>{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
