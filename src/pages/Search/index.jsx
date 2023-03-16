import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useIsLoggedIn } from '../../context/LoginContext';
import { useSetLayoutTitle } from '../../context/LayoutTitleContext';

import { titlePlaceholder } from '../../assets/constants';
import placeholder from '../../assets/placeholder.png';

import './style.css';

const Search = () => {
    const setLayoutTitle = useSetLayoutTitle();
    const isLoggedIn = useIsLoggedIn();

    const [searchResult, setSearchResult] = useState([
        {
            id: 1,
            title: titlePlaceholder,
            cover: placeholder,
            aired: 'Jan 10, 2023',
            episodes: 25,
            duration: '24 min',
            genres: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 2,
                    name: 'Adventure',
                },
            ],
            synopsis:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu odio. Duis tempor fringilla purus sit amet sagittis. Vestibulum at ultrices elit. Curabitur vulputate tortor ligula, sit amet congue tortor porttitor pellentesque. Morbi volutpat turpis at est tincidunt volutpat. Duis hendrerit dictum vestibulum. Vivamus elementum dictum ligula nec consequat. Cras sit amet molestie elit, tempus rutrum ligula. Sed nibh ex, viverra ut libero sit amet, finibus porta justo. Ut eget ex finibus velit convallis facilisis vitae ut nisi. Sed consequat vulputate rhoncus. Vestibulum et diam eget urna dapibus lacinia. Donec sapien neque, cursus posuere congue pretium, elementum at turpis. Duis sollicitudin blandit libero, sit amet faucibus nulla efficitur at. Suspendisse cursus efficitur velit a vestibulum. Suspendisse maximus ante quis est rutrum, quis congue dolor laoreet. Sed lobortis posuere justo. ',
            score: 7.16,
            members: '253k',
            list: 'Plan to Watch',
            listClass: 'search-plan-to-watch',
        },
        {
            id: 2,
            title: titlePlaceholder,
            cover: placeholder,
            aired: 'Jan 10, 2023',
            episodes: 25,
            duration: '24 min',
            genres: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 2,
                    name: 'Adventure',
                },
            ],
            synopsis:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu odio. Duis tempor fringilla purus sit amet sagittis. Vestibulum at ultrices elit. Curabitur vulputate tortor ligula, sit amet congue tortor porttitor pellentesque. Morbi volutpat turpis at est tincidunt volutpat. Duis hendrerit dictum vestibulum. Vivamus elementum dictum ligula nec consequat. Cras sit amet molestie elit, tempus rutrum ligula. Sed nibh ex, viverra ut libero sit amet, finibus porta justo. Ut eget ex finibus velit convallis facilisis vitae ut nisi. Sed consequat vulputate rhoncus. Vestibulum et diam eget urna dapibus lacinia. Donec sapien neque, cursus posuere congue pretium, elementum at turpis. Duis sollicitudin blandit libero, sit amet faucibus nulla efficitur at. Suspendisse cursus efficitur velit a vestibulum. Suspendisse maximus ante quis est rutrum, quis congue dolor laoreet. Sed lobortis posuere justo. ',
            score: 7.16,
            members: '253k',
            list: 'On Hold',
            listClass: 'search-on-hold',
        },
        {
            id: 3,
            title: titlePlaceholder,
            cover: placeholder,
            aired: 'Jan 10, 2023',
            episodes: 25,
            duration: '24 min',
            genres: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 2,
                    name: 'Adventure',
                },
            ],
            synopsis:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu odio. Duis tempor fringilla purus sit amet sagittis. Vestibulum at ultrices elit. Curabitur vulputate tortor ligula, sit amet congue tortor porttitor pellentesque. Morbi volutpat turpis at est tincidunt volutpat. Duis hendrerit dictum vestibulum. Vivamus elementum dictum ligula nec consequat. Cras sit amet molestie elit, tempus rutrum ligula. Sed nibh ex, viverra ut libero sit amet, finibus porta justo. Ut eget ex finibus velit convallis facilisis vitae ut nisi. Sed consequat vulputate rhoncus. Vestibulum et diam eget urna dapibus lacinia. Donec sapien neque, cursus posuere congue pretium, elementum at turpis. Duis sollicitudin blandit libero, sit amet faucibus nulla efficitur at. Suspendisse cursus efficitur velit a vestibulum. Suspendisse maximus ante quis est rutrum, quis congue dolor laoreet. Sed lobortis posuere justo. ',
            score: 7.16,
            members: '253k',
            list: 'Plan to Watch',
            listClass: 'search-plan-to-watch',
        },
        {
            id: 4,
            title: titlePlaceholder,
            cover: placeholder,
            aired: 'Jan 10, 2023',
            episodes: 25,
            duration: '24 min',
            genres: [
                {
                    id: 1,
                    name: 'Action',
                },
                {
                    id: 2,
                    name: 'Adventure',
                },
            ],
            synopsis:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu odio. Duis tempor fringilla purus sit amet sagittis. Vestibulum at ultrices elit. Curabitur vulputate tortor ligula, sit amet congue tortor porttitor pellentesque. Morbi volutpat turpis at est tincidunt volutpat. Duis hendrerit dictum vestibulum. Vivamus elementum dictum ligula nec consequat. Cras sit amet molestie elit, tempus rutrum ligula. Sed nibh ex, viverra ut libero sit amet, finibus porta justo. Ut eget ex finibus velit convallis facilisis vitae ut nisi. Sed consequat vulputate rhoncus. Vestibulum et diam eget urna dapibus lacinia. Donec sapien neque, cursus posuere congue pretium, elementum at turpis. Duis sollicitudin blandit libero, sit amet faucibus nulla efficitur at. Suspendisse cursus efficitur velit a vestibulum. Suspendisse maximus ante quis est rutrum, quis congue dolor laoreet. Sed lobortis posuere justo. ',
            score: 7.16,
            members: '253k',
            list: 'Plan to Watch',
            listClass: 'search-plan-to-watch',
        },
    ]);

    useEffect(() => {
        document.title = 'Search - MyAnimeList.net';
        setLayoutTitle('Anime Search');
    }, [setLayoutTitle]);

    return (
        <div id='search-container'>
            {searchResult.map(anime => (
                <div key={anime.id} className='search-anime-card'>
                    <div className='search-anime-card-link'>
                        <Link to={`/anime/${anime.id}`} className='link'>
                            {anime.title}
                        </Link>
                    </div>
                    <div className='search-anime-card-info flex-center'>{`${anime.aired} | ${anime.episodes} eps, ${anime.duration}`}</div>
                    <div className='search-anime-card-genres inline-grid'>
                        {anime.genres.map(genre => (
                            <Link key={genre.id} to={`/genre/${genre.id}`}>
                                {genre.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex-center'>
                        <Link to={`/anime/${anime.id}`}>
                            <img src={anime.cover} alt='anime-cover' width='167' height='242' />
                        </Link>
                        <div className='search-anime-card-synopsis'>{anime.synopsis}</div>
                    </div>
                    <div className='search-anime-card-bottom'>
                        <div className='search-anime-card-numbers'>{anime.score}</div>
                        <div className='search-anime-card-numbers'>{anime.members}</div>
                        <button
                            className={`button ${
                                isLoggedIn && anime.list ? anime.listClass : 'blue-button'
                            }`}
                        >
                            {isLoggedIn && anime.list ? anime.list : 'Add to List'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Search;
