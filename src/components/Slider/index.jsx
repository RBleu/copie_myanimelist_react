import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import './style.css';

const Slider = ({ options, title, linkTo, slides }) => {
    const { type, imageAttributes, data } = slides;

    return (
        <Splide options={options}>
            {data.map(slide => {
                let { displayTitle, className, title } = slide.titleData;

                return (
                    <SplideSlide key={slide.id}>
                        <Link
                            to={`/${type}/${slide.id}`}
                            className='slider-slide-link hover-opacity'
                            style={{ width: imageAttributes.width }}
                        >
                            <img
                                className='slider-slide-cover'
                                alt=''
                                src={slide.cover}
                                {...imageAttributes}
                            />
                            <div
                                className={`slider-slide-title ${className || ''}`}
                                title={title || ''}
                            >
                                {displayTitle}
                            </div>
                        </Link>
                    </SplideSlide>
                );
            })}
        </Splide>
    );
};

export default Slider;
