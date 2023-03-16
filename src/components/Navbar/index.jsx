import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { menu, titlePlaceholder } from '../../assets/constants';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import placeholder from '../../assets/placeholder.png';

import './style.css';

const Navbar = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchResultRef = useRef();
    const searchInputRef = useRef();

    const navigate = useNavigate();

    const getSearchResult = async () => {
        const data = [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                aired: 'Oct 5, 2004 to Mar 27, 2007',
                score: 9.55,
                status: 'Finished Airing',
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                aired: 'Oct 5, 2004 to Mar 27, 2007',
                score: 9.55,
                status: 'Finished Airing',
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                aired: 'Oct 5, 2004 to Mar 27, 2007',
                score: 9.55,
                status: 'Finished Airing',
            },
            {
                id: 4,
                title: titlePlaceholder,
                cover: placeholder,
                aired: 'Oct 5, 2004 to Mar 27, 2007',
                score: 9.55,
                status: 'Finished Airing',
            },
            {
                id: 5,
                title: titlePlaceholder,
                cover: placeholder,
                aired: 'Oct 5, 2004 to Mar 27, 2007',
                score: 9.55,
                status: 'Finished Airing',
            },
        ];

        return data;
    };

    const onSearchTitleChange = event => {
        const value = event.target.value;
        setSearchTitle(value);

        if (value.length > 2) {
            getSearchResult().then(data => {
                setSearchResult(data);
            });
            searchResultRef.current.classList.add('show');
        } else {
            setSearchResult([]);
            searchResultRef.current.classList.remove('show');
        }
    };

    const onSearchbarFocus = () => {
        if (searchTitle.length > 2) {
            searchResultRef.current.classList.add('show');
        }
    };

    const onSearchbarBlur = event => {
        if (!searchResultRef.current.contains(event.relatedTarget)) {
            searchResultRef.current.classList.remove('show');
        }
    };

    const clearSearch = () => {
        searchResultRef.current.classList.remove('show');
        searchInputRef.current.value = '';
        setSearchTitle('');
        setSearchResult([]);
    };

    const launchSearch = event => {
        if (
            ((event.type === 'keydown' && event.keyCode === 13) || event.type === 'click') &&
            searchTitle.length > 2
        ) {
            navigate(`/search/${searchTitle}`);
            clearSearch();
        }
    };

    return (
        <nav>
            <ul id='navbar-menu' className='flex-center'>
                {menu.map((item, i) => (
                    <li key={i} className='navbar-menu-item'>
                        <div className='navbar-menu-item-title flex-center'>{item.title}</div>
                        <ul className='navbar-sub-menu'>
                            {item.subMenu.map((subItem, j) => (
                                <li key={j} className='navbar-sub-menu-item'>
                                    <Link to={subItem.to}>{subItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                <li id='navbar-menu-search'>
                    <div id='navbar-menu-searchbar' className='flex-center'>
                        <input
                            type='text'
                            ref={searchInputRef}
                            onChange={onSearchTitleChange}
                            onFocus={onSearchbarFocus}
                            onBlur={onSearchbarBlur}
                            onKeyDown={launchSearch}
                        />
                        <button className='flex-center' onClick={launchSearch}>
                            <SearchIcon />
                        </button>
                    </div>
                    <ul id='navbar-menu-search-result' ref={searchResultRef}>
                        {searchResult.map(anime => (
                            <li key={anime.id} className='navbar-menu-search-result-item'>
                                <Link to={`/anime/${anime.id}`} onClick={clearSearch}>
                                    <img
                                        src={anime.cover}
                                        alt='anime-cover'
                                        width='58'
                                        height='90'
                                    />
                                    <div className='navbar-menu-search-result-anime'>
                                        <div className='navbar-menu-search-result-anime-title'>
                                            {anime.title}
                                        </div>
                                        <div>{`Aired: ${anime.aired}`}</div>
                                        <div>{`Score: ${anime.score}`}</div>
                                        <div>{`Status: ${anime.status}`}</div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
