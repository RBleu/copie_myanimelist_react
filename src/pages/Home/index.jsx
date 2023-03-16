import { useEffect } from 'react';

import { useIsLoggedIn } from '../../context/LoginContext';
import { useSetLayoutTitle } from '../../context/LayoutTitleContext';

import { titlePlaceholder } from '../../assets/constants';
import placeholder from '../../assets/placeholder.png';

import Section from '../../components/Section';
import Slider from '../../components/Slider';
import Table from '../../components/Table';

import './style.css';

const Home = () => {
    const isLoggedIn = useIsLoggedIn();
    const setLayoutTitle = useSetLayoutTitle();

    const options1 = {
        type: 'loop',
        perPage: 4,
        pagination: false,
        breakpoints: {
            1100: {
                perPage: 6,
            },
            1000: {
                perPage: 5,
            },
            840: {
                perPage: 4,
            },
            680: {
                perPage: 3,
            },
            520: {
                perPage: 2,
            },
        },
    };

    const options2 = {
        type: 'loop',
        perPage: 6,
        pagination: false,
        breakpoints: {
            1100: {
                perPage: 8,
            },
            930: {
                perPage: 7,
            },
            830: {
                perPage: 6,
            },
            720: {
                perPage: 5,
            },
            600: {
                perPage: 4,
            },
            490: {
                perPage: 3,
            },
        },
    };

    const currentSeasonAnimes = {
        type: 'anime',
        imageAttributes: {
            width: 160,
            height: 220,
            alt: 'anime-cover',
        },
        data: [
            {
                id: 1,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 2,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 3,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 4,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 5,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 6,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 7,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 8,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 9,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
            {
                id: 10,
                titleData: {
                    displayTitle: titlePlaceholder,
                },
                cover: placeholder,
            },
        ],
    };

    const mangaStore = {
        type: 'manga',
        imageAttributes: {
            width: 108,
            height: 163,
            alt: 'manga-cover',
        },
        data: [
            {
                id: 1,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 2,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 3,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 4,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 5,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 6,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 7,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 8,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 9,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 10,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
        ],
    };

    const latestUpdatedEpisodeVideos = {
        type: 'anime',
        imageAttributes: {
            width: 108,
            height: 163,
            alt: 'anime-cover',
        },
        data: [
            {
                id: 1,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 2,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 3,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 4,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 5,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 6,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 7,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 8,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 9,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
            {
                id: 10,
                titleData: {
                    displayTitle: titlePlaceholder,
                    title: titlePlaceholder,
                    className: 'slider-slide-title-bottom link',
                },
                cover: placeholder,
            },
        ],
    };

    const topAiringAnime = {
        imageAttributes: {
            width: 50,
            height: 70,
            alt: 'anime-cover',
        },
        data: [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 4,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 5,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
        ],
    };

    const topUpcomingAnime = {
        imageAttributes: {
            width: 50,
            height: 70,
            alt: 'anime-cover',
        },
        data: [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 4,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 5,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
        ],
    };

    const mostPopularAnime = {
        imageAttributes: {
            width: 50,
            height: 70,
            alt: 'anime-cover',
        },
        data: [
            {
                id: 1,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 2,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 3,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 4,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 5,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 6,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 7,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 8,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
            {
                id: 9,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'Special',
            },
            {
                id: 10,
                title: titlePlaceholder,
                cover: placeholder,
                episodes: 25,
                score: 9.55,
                members: 2098439,
                type: 'TV',
            },
        ],
    };

    useEffect(() => {
        document.title = isLoggedIn
            ? 'MyAnimeList.net - Panel'
            : 'MyAnimeList.net - Anime and Manga Database and Community';
        setLayoutTitle(isLoggedIn ? 'My Panel' : 'Welcome to MyAnimeList.net!');
    }, [isLoggedIn, setLayoutTitle]);

    return (
        <div id='home-container'>
            <section id='home-section'>
                <Section title='Winter 2023 Anime' linkTitle='View More' linkTo=''>
                    <Slider options={options1} slides={currentSeasonAnimes} />
                </Section>
                <Section title='Manga Store' linkTitle='View More' linkTo=''>
                    <Slider options={options2} slides={mangaStore} />
                </Section>
                <Section title='Latest Updated Episode Videos' linkTitle='View More' linkTo=''>
                    <Slider options={options2} slides={latestUpdatedEpisodeVideos} />
                </Section>
            </section>
            <aside id='home-aside'>
                <Table title='Top Airing Anime' linkTo='' animes={topAiringAnime} />
                <Table title='Top Upcoming Anime' linkTo='' animes={topUpcomingAnime} />
                <Table title='Most Popular Anime' linkTo='' animes={mostPopularAnime} />
            </aside>
        </div>
    );
};

export default Home;
