import { Link } from 'react-router-dom';

import './style.css';

const Section = ({ title, linkTitle, linkTo, children }) => {
    return (
        <section className='section-container'>
            <div className='section-header flex-between'>
                <div className='section-title'>{title}</div>
                {linkTitle && (
                    <Link className='link section-link' to={linkTo}>
                        {linkTitle}
                    </Link>
                )}
            </div>
            <div className='section-wrapper'>{children}</div>
        </section>
    );
};

export default Section;
