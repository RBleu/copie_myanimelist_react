import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useIsLoggedIn, useSetIsLoggedIn } from '../../context/LoginContext';
import { username } from '../../assets/constants';

import logo from '../../assets/logo.png';
import placeholder from '../../assets/placeholder.png';
import { ReactComponent as ListIcon } from '../../assets/list-icon.svg';
import { ReactComponent as EnvelopeIcon } from '../../assets/envelope-icon.svg';
import { ReactComponent as BellIcon } from '../../assets/bell-icon.svg';
import { ReactComponent as BarsIcon } from '../../assets/bars-icon.svg';

import './style.css';

const Header = ({ setSubMenuVisibility }) => {
    const isLoggedIn = useIsLoggedIn();
    const setIsLoggedIn = useSetIsLoggedIn();

    const listMenuRef = useRef();
    const profileMenuRef = useRef();

    const listMenu = [
        {
            title: 'Anime List',
            to: `/animelist/${username}`,
        },
        {
            title: 'Manga List',
            to: `/mangalist/${username}`,
        },
        {
            title: 'Quick Add',
            to: '',
        },
        {
            title: 'List Settings',
            to: '',
        },
        {
            title: 'Interest Stacks',
            to: '',
        },
    ];

    const profileMenu = [
        {
            title: 'Profile',
            to: `/profile/${username}`,
        },
        {
            title: 'Friends',
            to: '',
        },
        {
            title: 'Clubs',
            to: '',
        },
        {
            title: 'Reviews',
            to: '',
        },
        {
            title: 'Recommendations',
            to: '',
        },
        {
            title: 'Interest Stacks',
            to: '',
        },
        {
            title: 'Blog Posts',
            to: '',
        },
        {
            title: 'Bookshelf',
            to: '',
        },
        {
            title: 'Account Settings',
            to: '',
        },
        {
            title: 'Logout',
            to: '',
            onClick: () => {
                setIsLoggedIn(false);
            },
        },
    ];

    useEffect(() => {
        const changeHeaderMenuVisibility = event => {
            if (isLoggedIn) {
                const target = event.target.closest('div[data-name]');

                if (target) {
                    const name = target.getAttribute('data-name');

                    if (name === 'list-menu') {
                        listMenuRef.current.classList.toggle('show');
                        profileMenuRef.current.classList.remove('show');
                    } else if (name === 'profile-menu') {
                        profileMenuRef.current.classList.toggle('show');
                        listMenuRef.current.classList.remove('show');
                    }
                } else {
                    listMenuRef.current.classList.remove('show');
                    profileMenuRef.current.classList.remove('show');
                }
            }
        };

        document.addEventListener('click', changeHeaderMenuVisibility);

        return () => {
            document.removeEventListener('click', changeHeaderMenuVisibility);
        };
    }, [listMenuRef, profileMenuRef, isLoggedIn]);

    return (
        <header className='flex-between'>
            <Link to='/'>
                <img src={logo} alt='website-logo' />
            </Link>
            <div id='header-right' className='inline-grid'>
                {isLoggedIn ? (
                    <>
                        <div className='header-icon flex-center' data-name='list-menu'>
                            <ListIcon />
                            <ul className='header-icon-menu' ref={listMenuRef}>
                                {listMenu.map((item, index) => (
                                    <li key={index} className='header-icon-menu-item'>
                                        <Link to={item.to}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='header-icon flex-center'>
                            <EnvelopeIcon />
                        </div>
                        <div className='header-icon flex-center'>
                            <BellIcon />
                        </div>
                        <div id='header-profile-container' className='flex-center'>
                            <div
                                id='header-profile-username'
                                className='flex-center'
                                data-name='profile-menu'
                            >
                                {username}
                            </div>
                            <Link className='hover-opacity' to={`/profile/${username}`}>
                                <img src={placeholder} alt='profile' width='30' height='30' />
                            </Link>
                            <ul className='header-icon-menu' ref={profileMenuRef}>
                                {profileMenu.map((item, index) => (
                                    <li key={index} className='header-icon-menu-item'>
                                        <Link to={item.to} onClick={item.onClick}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link className='button white-button' to='/login'>
                            Login
                        </Link>
                        <Link className='button blue-button' to='/register'>
                            Sign Up
                        </Link>
                    </>
                )}
                <button
                    className='mobile-menu-button flex-center'
                    onClick={() => {
                        setSubMenuVisibility(true);
                    }}
                >
                    <BarsIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
