import { useState, useEffect, useRef, Fragment } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useSetLayoutTitle } from '../../context/LayoutTitleContext';
import { useIsLoggedIn } from '../../context/LoginContext';

import { titlePlaceholder, username } from '../../assets/constants';
import placeholder from '../../assets/placeholder.png';

import Section from '../../components/Section';

import './style.css';

const Anime = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState({
        title: titlePlaceholder,
        type: 'TV',
        episodes: 0,
        status: 'Currently airing',
        aired: 'Jan 8, 2023 to ?',
        season: 'Winter 2023',
        duration: '23 min.',
        synopsis:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non arcu odio. Duis tempor fringilla purus sit amet sagittis. Vestibulum at ultrices elit. Curabitur vulputate tortor ligula, sit amet congue tortor porttitor pellentesque. Morbi volutpat turpis at est tincidunt volutpat. Duis hendrerit dictum vestibulum. Vivamus elementum dictum ligula nec consequat. Cras sit amet molestie elit, tempus rutrum ligula. Sed nibh ex, viverra ut libero sit amet, finibus porta justo. Ut eget ex finibus velit convallis facilisis vitae ut nisi. Sed consequat vulputate rhoncus. Vestibulum et diam eget urna dapibus lacinia. Donec sapien neque, cursus posuere congue pretium, elementum at turpis. Duis sollicitudin blandit libero, sit amet faucibus nulla efficitur at. Suspendisse cursus efficitur velit a vestibulum. Suspendisse maximus ante quis est rutrum, quis congue dolor laoreet. Sed lobortis posuere justo. ',
        score: 7.16,
        members: '253,921',
        rank: '3390',
        popularity: '852',
        list: null,
        numEpisodesWatched: 0,
        related: {
            prequel: [
                {
                    id: 20,
                    title: titlePlaceholder,
                },
                {
                    id: 25,
                    title: titlePlaceholder,
                },
            ],
            sequel: [
                {
                    id: 30,
                    title: titlePlaceholder,
                },
            ],
        },
    });

    const navigate = useNavigate();

    const setLayoutTitle = useSetLayoutTitle();
    const isLoggedIn = useIsLoggedIn();

    const listSelectRef = useRef();
    const scoreSelectRef = useRef();
    const numEpisodesWatchedRef = useRef();

    const scoreSelectValues = [
        {
            value: 0,
            text: 'Select',
        },
        {
            value: 10,
            text: '(10) Masterpiece',
        },
        {
            value: 9,
            text: '(9) Great',
        },
        {
            value: 8,
            text: '(8) Very Good',
        },
        {
            value: 7,
            text: '(7) Good',
        },
        {
            value: 6,
            text: '(6) Fine',
        },
        {
            value: 5,
            text: '(5) Average',
        },
        {
            value: 4,
            text: '(4) Bad',
        },
        {
            value: 3,
            text: '(3) Very Bad',
        },
        {
            value: 2,
            text: '(2) Horrible',
        },
        {
            value: 1,
            text: '(1) Appalling',
        },
    ];

    const listSelectValues = ['Watching', 'Completed', 'On-Hold', 'Dropped', 'Plan to Watch'];

    const reviews = [
        {
            username: username,
            profileImage: placeholder,
            date: 'Jan 25, 2023',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui lorem. Morbi dapibus risus ac nisi porttitor, non egestas nisl tristique. Nam interdum vulputate mi, non sodales nunc hendrerit sed. Fusce faucibus risus augue, at accumsan tellus fermentum sed. Curabitur vel elit elementum, varius ex in, posuere arcu. Nulla eu ipsum quis urna pharetra laoreet scelerisque et dui. Curabitur cursus dui nec lobortis consequat. In laoreet dui sed ligula ornare aliquet. Quisque porttitor enim id ex euismod mattis. Quisque feugiat nibh at ipsum rhoncus faucibus. Integer accumsan viverra blandit. Sed eu justo urna. Sed aliquam felis in nibh venenatis molestie.',
        },
        {
            username: username,
            profileImage: placeholder,
            date: 'Jan 25, 2023',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui lorem. Morbi dapibus risus ac nisi porttitor, non egestas nisl tristique. Nam interdum vulputate mi, non sodales nunc hendrerit sed. Fusce faucibus risus augue, at accumsan tellus fermentum sed. Curabitur vel elit elementum, varius ex in, posuere arcu. Nulla eu ipsum quis urna pharetra laoreet scelerisque et dui. Curabitur cursus dui nec lobortis consequat. In laoreet dui sed ligula ornare aliquet. Quisque porttitor enim id ex euismod mattis. Quisque feugiat nibh at ipsum rhoncus faucibus. Integer accumsan viverra blandit. Sed eu justo urna. Sed aliquam felis in nibh venenatis molestie.',
        },
        {
            username: username,
            profileImage: placeholder,
            date: 'Jan 25, 2023',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui lorem. Morbi dapibus risus ac nisi porttitor, non egestas nisl tristique. Nam interdum vulputate mi, non sodales nunc hendrerit sed. Fusce faucibus risus augue, at accumsan tellus fermentum sed. Curabitur vel elit elementum, varius ex in, posuere arcu. Nulla eu ipsum quis urna pharetra laoreet scelerisque et dui. Curabitur cursus dui nec lobortis consequat. In laoreet dui sed ligula ornare aliquet. Quisque porttitor enim id ex euismod mattis. Quisque feugiat nibh at ipsum rhoncus faucibus. Integer accumsan viverra blandit. Sed eu justo urna. Sed aliquam felis in nibh venenatis molestie.',
        },
        {
            username: username,
            profileImage: placeholder,
            date: 'Jan 25, 2023',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui lorem. Morbi dapibus risus ac nisi porttitor, non egestas nisl tristique. Nam interdum vulputate mi, non sodales nunc hendrerit sed. Fusce faucibus risus augue, at accumsan tellus fermentum sed. Curabitur vel elit elementum, varius ex in, posuere arcu. Nulla eu ipsum quis urna pharetra laoreet scelerisque et dui. Curabitur cursus dui nec lobortis consequat. In laoreet dui sed ligula ornare aliquet. Quisque porttitor enim id ex euismod mattis. Quisque feugiat nibh at ipsum rhoncus faucibus. Integer accumsan viverra blandit. Sed eu justo urna. Sed aliquam felis in nibh venenatis molestie.',
        },
        {
            username: username,
            profileImage: placeholder,
            date: 'Jan 25, 2023',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dui lorem. Morbi dapibus risus ac nisi porttitor, non egestas nisl tristique. Nam interdum vulputate mi, non sodales nunc hendrerit sed. Fusce faucibus risus augue, at accumsan tellus fermentum sed. Curabitur vel elit elementum, varius ex in, posuere arcu. Nulla eu ipsum quis urna pharetra laoreet scelerisque et dui. Curabitur cursus dui nec lobortis consequat. In laoreet dui sed ligula ornare aliquet. Quisque porttitor enim id ex euismod mattis. Quisque feugiat nibh at ipsum rhoncus faucibus. Integer accumsan viverra blandit. Sed eu justo urna. Sed aliquam felis in nibh venenatis molestie.',
        },
    ];

    const onClick = event => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            event.target.classList.add('hide');
            listSelectRef.current.classList.remove('hide');
            scoreSelectRef.current.removeAttribute('disabled');
            setAnime(prev => {
                return {
                    ...prev,
                    [listSelectRef.current.name]: listSelectRef.current.value,
                };
            });
        }
    };

    const onChange = event => {
        setAnime(prev => {
            return {
                ...prev,
                [event.target.name]: Number(event.target.value),
            };
        });
    };

    const onChangeListSelect = event => {
        event.target.setAttribute('color-class', event.target.value);
        onChange(event);
    };

    const incrementValue = () => {
        numEpisodesWatchedRef.current.value = Number(numEpisodesWatchedRef.current.value) + 1;
    };

    const onlyNumbersOnChange = event => {
        event.target.value = Number(event.target.value.replace(/\D/g, ''));
        onChange(event);
    };

    useEffect(() => {
        if (id.match(/^[0-9]*$/)) {
            document.title = `${anime.title} - MyAnimeList.net`;
            setLayoutTitle(anime.title);
        } else {
            navigate('/error');
        }
    }, [id, setLayoutTitle, navigate, anime]);

    return (
        <div id='anime-container'>
            <div id='anime-aside'>
                <img src={placeholder} alt='anime-cover' width='225' height='318' />
                <Section title='Information'>
                    <div className='section-content'>
                        <div className='section-item'>
                            <span className='section-item-title'>Type:</span>
                            <Link className='link'>{anime.type}</Link>
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Episodes:</span>
                            {anime.episodes || 'Unknown'}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Status:</span>
                            {anime.status}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Aired:</span>
                            {anime.aired}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Premiered:</span>
                            <Link className='link'>{anime.season}</Link>
                        </div>
                    </div>
                </Section>
                <Section title='Statistics'>
                    <div className='section-content'>
                        <div className='section-item'>
                            <span className='section-item-title'>Score:</span>
                            {anime.score}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Rank:</span>#{anime.rank}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Popularity:</span>#
                            {anime.popularity}
                        </div>
                        <div className='section-item'>
                            <span className='section-item-title'>Members:</span>
                            {anime.members}
                        </div>
                    </div>
                </Section>
            </div>
            <div id='anime-section'>
                <div id='anime-info' className='inline-grid'>
                    <div id='anime-score'>
                        <div id='anime-score-title'>Score</div>
                        <div id='anime-score-value'>{anime.score}</div>
                    </div>
                    <div id='anime-info-right'>
                        <div id='anime-numbers' className='inline-grid'>
                            <div>
                                <span className='anime-numbers-title'>Ranked</span>
                                <span className='anime-numbers-value'>#{anime.rank}</span>
                            </div>
                            <div>
                                <span className='anime-numbers-title'>Popularity</span>
                                <span className='anime-numbers-value'>#{anime.popularity}</span>
                            </div>
                            <div>
                                <span className='anime-numbers-title'>Members</span>
                                <span className='anime-numbers-value'>{anime.members}</span>
                            </div>
                        </div>
                        <div id='anime-info-links' className='inline-grid'>
                            <Link className='link'>{anime.season}</Link>
                            <Link className='link'>{anime.type}</Link>
                        </div>
                    </div>
                </div>
                <div id='anime-selects'>
                    <div id='anime-selects-content' className='inline-grid'>
                        <button
                            className={`button blue-button ${
                                isLoggedIn && anime.list !== null ? 'hide' : ''
                            }`}
                            onClick={onClick}
                        >
                            Add to List
                        </button>
                        <select
                            className={`select ${isLoggedIn && anime.list !== null ? '' : 'hide'}`}
                            color-class={isLoggedIn && anime.list !== null ? anime.list : '1'}
                            onChange={onChangeListSelect}
                            ref={listSelectRef}
                            name='list'
                            value={anime.list || ''}
                        >
                            {listSelectValues.map((text, value) => (
                                <option key={value} value={value}>
                                    {text}
                                </option>
                            ))}
                        </select>
                        <select
                            ref={scoreSelectRef}
                            className='select'
                            disabled={!isLoggedIn || anime.list === null}
                            defaultValue={isLoggedIn && anime.yourScore}
                            name='yourScore'
                            onChange={onChange}
                        >
                            {scoreSelectValues.map(score => (
                                <option key={score.value} value={score.value}>
                                    {score.text}
                                </option>
                            ))}
                        </select>
                        <div
                            id='anime-num-episodes'
                            className={isLoggedIn && anime.list !== null ? '' : 'disabled'}
                        >
                            Episodes:{' '}
                            <input
                                ref={numEpisodesWatchedRef}
                                type='text'
                                defaultValue={isLoggedIn ? anime.numEpisodesWatched : 0}
                                name='numEpisodesWatched'
                                onChange={onlyNumbersOnChange}
                                disabled={!isLoggedIn || anime.list === null}
                            />
                            /{anime.episodes || '?'}
                            <button
                                onClick={incrementValue}
                                disabled={!isLoggedIn || anime.list === null}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <Section title='Synopsis' linkTitle='Edit' linkTo=''>
                    <div id='anime-synopsis'>{anime.synopsis}</div>
                </Section>
                {anime.related && (
                    <Section title='Related Anime' linkTitle='Edit' linkTo=''>
                        {anime.related.prequel && (
                            <div className='related-anime'>
                                <span>Prequel:</span>
                                <div className='related-anime-links'>
                                    {anime.related.prequel.map((prequel, index) => (
                                        <Fragment key={prequel.id}>
                                            <Link to={`/anime/${prequel.id}`} className='link'>
                                                {prequel.title}
                                            </Link>
                                            {index < anime.related.prequel.length - 1 && ', '}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                        {anime.related.sequel && (
                            <div className='related-anime'>
                                <span>Sequel:</span>
                                <div className='related-anime-links'>
                                    {anime.related.sequel.map((sequel, index) => (
                                        <Fragment key={sequel.id}>
                                            <Link to={`/anime/${sequel.id}`} className='link'>
                                                {sequel.title}
                                            </Link>
                                            {index < anime.related.sequel.length - 1 && ', '}
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Section>
                )}
                <Section title='Reviews' linkTitle='More Reviews' linkTo=''>
                    <div id='reviews-container'>
                        {reviews.map((review, index) => (
                            <div className='review inline-grid' key={index}>
                                <Link to={`/profile/${review.username}`}>
                                    <img
                                        src={review.profileImage}
                                        alt='review-profile'
                                        width='50'
                                        height='50'
                                    />
                                </Link>
                                <div className='review-right'>
                                    <div className='review-right-header flex-between'>
                                        <Link to={`/profile/${review.username}`} className='link'>
                                            {review.username}
                                        </Link>
                                        <div className='review-date'>{review.date}</div>
                                    </div>
                                    <div className='review-content'>{review.content}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Anime;
