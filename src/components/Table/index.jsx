import { Link } from 'react-router-dom';

import './style.css';

const Table = ({ title, linkTo, animes }) => {
    const { imageAttributes, data } = animes;

    return (
        <section className='home-table'>
            <div className='home-table-header flex-between'>
                <div className='home-table-title'>{title}</div>
                <Link to={linkTo} className='home-table-link link'>
                    More
                </Link>
            </div>
            <div className='home-table-rows'>
                {data.map((anime, index) => (
                    <div className='home-table-row flex-between' key={index}>
                        <div className='home-table-row-number'>{index + 1}</div>
                        <Link to={`/anime/${anime.id}`}>
                            <img alt='' src={anime.cover} {...imageAttributes} />
                        </Link>
                        <div className='home-table-row-data'>
                            <Link className='home-table-row-title link' to={`/anime/${anime.id}`}>
                                {anime.title}
                            </Link>
                            <div className='home-table-row-info'>
                                {anime.type}, {anime.episodes} eps, scored {anime.score}
                                <br />
                                {new Intl.NumberFormat('en-GB').format(anime.members)} members
                            </div>
                        </div>
                        <Link className='home-table-row-button'>add</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Table;
