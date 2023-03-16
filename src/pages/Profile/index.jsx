import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useSetLayoutTitle } from '../../context/LayoutTitleContext';

import Section from '../../components/Section';

import { titlePlaceholder } from '../../assets/constants';
import placeholder from '../../assets/placeholder.png';

import './style.css';

const Profile = () => {
    const { username } = useParams();
    const setLayoutTitle = useSetLayoutTitle();

    const stats = {
        anime: {
            days: '67.5',
            mean: '0.00',
            total: 507,
            rewatched: 0,
            episodes: '4,169',
            data: [
                {
                    className: 'stats-watching',
                    list: 'Watching',
                    num: 0,
                },
                {
                    className: 'stats-completed',
                    list: 'Completed',
                    num: 248,
                },
                {
                    className: 'stats-on-hold',
                    list: 'On-Hold',
                    num: 223,
                },
                {
                    className: 'stats-dropped',
                    list: 'Dropped',
                    num: 0,
                },
                {
                    className: 'stats-plan-to-watch',
                    list: 'Plan to Watch',
                    num: 36,
                },
            ],
        },
        manga: {
            days: '9.6',
            mean: '0.00',
            total: 10,
            reread: 0,
            chapters: '1,720',
            volumes: 170,
            data: [
                {
                    className: 'stats-watching',
                    list: 'Reading',
                    num: 1,
                },
                {
                    className: 'stats-completed',
                    list: 'Completed',
                    num: 7,
                },
                {
                    className: 'stats-on-hold',
                    list: 'On-Hold',
                    num: 0,
                },
                {
                    className: 'stats-dropped',
                    list: 'Dropped',
                    num: 0,
                },
                {
                    className: 'stats-plan-to-watch',
                    list: 'Plan to Read',
                    num: 2,
                },
            ],
        },
    };

    const history = {
        anime: [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'Watching',
                className: 'stats-watching',
                score: null,
                updateDate: 'Mar 13, 4:19 PM',
                numEpisodes: 0,
                numEpisodesWatched: 5,
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'On-Hold',
                className: 'stats-on-hold',
                score: '9.55',
                updateDate: 'Mar 13, 4:19 PM',
                numEpisodes: 12,
                numEpisodesWatched: 3,
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'Completed',
                className: 'stats-completed',
                score: null,
                updateDate: 'Mar 13, 4:19 PM',
                numEpisodes: 12,
                numEpisodesWatched: 12,
            },
        ],
        manga: [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'Reading',
                className: 'stats-watching',
                score: null,
                updateDate: 'Mar 13, 4:19 PM',
                numChapters: 0,
                numChaptersRead: 5,
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'On-Hold',
                className: 'stats-on-hold',
                score: '9.55',
                updateDate: 'Mar 13, 4:19 PM',
                numChapters: 12,
                numChaptersRead: 3,
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                list: 'Completed',
                className: 'stats-completed',
                score: null,
                updateDate: 'Mar 13, 4:19 PM',
                numChapters: 12,
                numChaptersRead: 12,
            },
        ],
    };

    useEffect(() => {
        document.title = `${username}'s Profile - MyAnimeList.net`;
        setLayoutTitle(`${username}'s Profile`);
    }, [username, setLayoutTitle]);

    return (
        <div id='profile-container'>
            <aside id='profile-aside'>
                <img src={placeholder} alt='profile' width='225' height='350' />
                <div className='flex-between'>
                    <Link className='button blue-button list-button'>Anime List</Link>
                    <Link className='button blue-button list-button'>Manga List</Link>
                </div>
            </aside>
            <section id='profile-section'>
                <Section title='Statistics'>
                    <div className='profile-section-container'>
                        <Section title='Anime Stats'>
                            <div className='stats-container'>
                                <div className='stats-score flex-between'>
                                    <div>
                                        Days:{' '}
                                        <span className='stats-score-number'>
                                            {stats.anime.days}
                                        </span>
                                    </div>
                                    <div>
                                        Mean Score:{' '}
                                        <span className='stats-score-number'>
                                            {stats.anime.mean}
                                        </span>
                                    </div>
                                </div>
                                <div className='stats-graph'>
                                    {stats.anime.data.map((item, i) => (
                                        <span
                                            key={i}
                                            className={`stats-graph-item ${item.className}`}
                                            style={{
                                                width: `${(item.num / stats.anime.total) * 100}%`,
                                            }}
                                        ></span>
                                    ))}
                                </div>
                                <div className='stats-details flex-between'>
                                    <div className='stats-details-left'>
                                        {stats.anime.data.map((item, i) => (
                                            <div key={i} className='flex-between'>
                                                <Link className='link flex-center'>
                                                    <div
                                                        className={`circle ${item.className}`}
                                                    ></div>
                                                    {item.list}
                                                </Link>
                                                <span>{item.num}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='stats-details-right'>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Total Entries</span>
                                            <span>{stats.anime.total}</span>
                                        </div>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Rewatched</span>
                                            <span>{stats.anime.rewatched}</span>
                                        </div>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Episodes</span>
                                            <span>{stats.anime.episodes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section title='Last Anime Updates' linkTitle='Anime History' linkTo=''>
                            <div className='history-container'>
                                {history.anime.map((item, i) => (
                                    <div key={i} className='flex-between'>
                                        <Link to={`/anime/${item.id}`} className='hover-opacity'>
                                            <img
                                                src={item.cover}
                                                alt='anime-cover'
                                                width='40'
                                                height='60'
                                            />
                                        </Link>
                                        <div className='history-data'>
                                            <Link to={`/anime/${item.id}`} className='link '>
                                                {item.title}
                                            </Link>
                                            <div className='flex-between'>
                                                <div className='history-graph'>
                                                    <span
                                                        className={`${item.className}`}
                                                        style={{
                                                            width: `${
                                                                item.numEpisodes === 0
                                                                    ? '50'
                                                                    : (item.numEpisodesWatched /
                                                                          item.numEpisodes) *
                                                                      100
                                                            }%`,
                                                        }}
                                                    ></span>
                                                </div>
                                                <div className='gray-text'>{item.updateDate}</div>
                                            </div>
                                            <div className='gray-text'>{`${item.list} · Scored ${
                                                item.score ?? '-'
                                            }`}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                        <Section title='Manga Stats'>
                            <div className='stats-container'>
                                <div className='stats-score flex-between'>
                                    <div>
                                        Days:{' '}
                                        <span className='stats-score-number'>
                                            {stats.manga.days}
                                        </span>
                                    </div>
                                    <div>
                                        Mean Score:{' '}
                                        <span className='stats-score-number'>
                                            {stats.manga.mean}
                                        </span>
                                    </div>
                                </div>
                                <div className='stats-graph'>
                                    {stats.manga.data.map((item, i) => (
                                        <span
                                            key={i}
                                            className={`stats-graph-item ${item.className}`}
                                            style={{
                                                width: `${(item.num / stats.manga.total) * 100}%`,
                                            }}
                                        ></span>
                                    ))}
                                </div>
                                <div className='stats-details flex-between'>
                                    <div className='stats-details-left'>
                                        {stats.manga.data.map((item, i) => (
                                            <div key={i} className='flex-between'>
                                                <Link className='link flex-center'>
                                                    <div
                                                        className={`circle ${item.className}`}
                                                    ></div>
                                                    {item.list}
                                                </Link>
                                                <span>{item.num}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='stats-details-right'>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Total Entries</span>
                                            <span>{stats.manga.total}</span>
                                        </div>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Reread</span>
                                            <span>{stats.manga.reread}</span>
                                        </div>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Chapters</span>
                                            <span>{stats.manga.chapters}</span>
                                        </div>
                                        <div className='flex-between'>
                                            <span className='gray-text'>Volumes</span>
                                            <span>{stats.manga.volumes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section title='Last Manga Updates' linkTitle='Manga History' linkTo=''>
                            <div className='history-container'>
                                {history.manga.map((item, i) => (
                                    <div key={i} className='flex-between'>
                                        <Link to={`/anime/${item.id}`} className='hover-opacity'>
                                            <img
                                                src={item.cover}
                                                alt='anime-cover'
                                                width='40'
                                                height='60'
                                            />
                                        </Link>
                                        <div className='history-data'>
                                            <Link to={`/anime/${item.id}`} className='link '>
                                                {item.title}
                                            </Link>
                                            <div className='flex-between'>
                                                <div className='history-graph'>
                                                    <span
                                                        className={`${item.className}`}
                                                        style={{
                                                            width: `${
                                                                item.numChapters === 0
                                                                    ? '50'
                                                                    : (item.numChapters /
                                                                          item.numChaptersRead) *
                                                                      100
                                                            }%`,
                                                        }}
                                                    ></span>
                                                </div>
                                                <div className='gray-text'>{item.updateDate}</div>
                                            </div>
                                            <div className='gray-text'>{`${item.list} · Scored ${
                                                item.score ?? '-'
                                            }`}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                </Section>
            </section>
        </div>
    );
};

export default Profile;
