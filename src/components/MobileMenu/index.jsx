import { useIsLoggedIn, useSetIsLoggedIn } from '../../context/LoginContext';

import { Link } from 'react-router-dom';

import { ReactComponent as BarsIcon } from '../../assets/bars-icon.svg';
import { menu, username } from '../../assets/constants';
import placeholder from '../../assets/placeholder.png';

import './style.css';

const MobileMenu = ({ subMenuVisibility, setSubMenuVisibility }) => {
    const isLoggedIn = useIsLoggedIn();
    const setIsLoggedIn = useSetIsLoggedIn();

    const profileSettingsMenu = [
        {
            title: 'Anime List',
            to: '',
        },
        {
            title: 'Manga List',
            to: '',
        },
        {
            title: 'List Settings',
            to: '',
        },
        {
            title: 'Messages',
            to: '',
        },
        {
            title: 'Notifications',
            to: '',
        },
        {
            title: 'Logout',
            to: '',
            onClick: () => {
                setIsLoggedIn(false);
                closeSubMenu();
            },
        },
    ];

    const closeSubMenu = () => {
        setSubMenuVisibility(false);
        closeVisibleSubMenu(null);
    };

    const closeVisibleSubMenu = element => {
        const mobileSubMenuVisible = document.querySelector('.mobile-sub-menu-container.visible');

        if (mobileSubMenuVisible !== null && mobileSubMenuVisible !== element) {
            mobileSubMenuVisible.classList.remove('visible');
            mobileSubMenuVisible.style.maxHeight = '0px';
        }
    };

    const changeSubMenuVisibility = event => {
        const mobileSubMenuContainer = event.currentTarget.nextSibling;

        closeVisibleSubMenu(mobileSubMenuContainer);

        mobileSubMenuContainer.classList.toggle('visible');

        if (mobileSubMenuContainer.classList.contains('visible')) {
            const mobileSubMenu = mobileSubMenuContainer.firstChild;
            mobileSubMenuContainer.style.maxHeight = `${mobileSubMenu.offsetHeight}px`;
        } else {
            mobileSubMenuContainer.style.maxHeight = '0px';
        }
    };

    return (
        <div id='mobile-menu-container' className={subMenuVisibility ? 'visible' : ''}>
            <div id='mobile-menu-header' className='flex-between'>
                <div id='mobile-header-left' className='inline-grid'>
                    {isLoggedIn ? (
                        <Link
                            to={`/profile/${username}`}
                            id='mobile-header-profile'
                            onClick={closeSubMenu}
                        >
                            <img src={placeholder} alt='profile' width='30' height='30' />
                            <div className='flex-center'>{username}</div>
                        </Link>
                    ) : (
                        <>
                            <Link
                                className='button white-button'
                                to='/login'
                                onClick={closeSubMenu}
                            >
                                Login
                            </Link>
                            <Link
                                className='button blue-button'
                                to='/register'
                                onClick={closeSubMenu}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
                <button
                    className='mobile-menu-button flex-center'
                    onClick={() => {
                        setSubMenuVisibility(false);
                    }}
                >
                    <BarsIcon />
                </button>
            </div>
            <ul id='mobile-menu'>
                {menu.map((item, i) => (
                    <li key={i} className='mobile-menu-item'>
                        <div
                            className='mobile-menu-item-title flex-center'
                            onClick={changeSubMenuVisibility}
                        >
                            {item.title}
                        </div>
                        <div className='mobile-sub-menu-container'>
                            <ul className='mobile-sub-menu'>
                                {item.subMenu.map((subItem, j) => (
                                    <li key={j} className='mobile-sub-menu-item'>
                                        <Link to={subItem.to} onClick={closeSubMenu}>
                                            {subItem.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
                {isLoggedIn && (
                    <li className='mobile-menu-item'>
                        <div
                            className='mobile-menu-item-title flex-center'
                            onClick={changeSubMenuVisibility}
                        >
                            Profile Settings
                        </div>
                        <div className='mobile-sub-menu-container'>
                            <ul className='mobile-sub-menu'>
                                {profileSettingsMenu.map((item, i) => (
                                    <li key={i} className='mobile-sub-menu-item'>
                                        <Link to={item.to} onClick={item.onClick ?? closeSubMenu}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default MobileMenu;
