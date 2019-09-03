import React, { Component } from 'react';
import style from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

export default class MovieGrid extends Component {
    state = {

    };

    render() {
        const { items } = this.props;
        return (
            // const { id, title, posterUrl, overview } = this.props;
            <ul className={style.movieGrid}>
                <MovieCard items={items} />
            </ul>
        )
    }
}
