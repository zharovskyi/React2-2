import React from 'react';
import style from './MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({ items }) => (
    <>
        {
            items.map(item =>
                <li key={item.id}>
                    <div className={style.movieCard}>
                        <img src={item.posterUrl} alt="asd" />
                        <div className={style.content}>
                            <h2 className={style.title}>{item.title}</h2>
                            <p className={style.descr}>{item.overview}</p>
                        </div>
                    </div>
                </li>)
        }
    </>
)


export default MovieCard;

MovieCard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        posterUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
    }))
}
