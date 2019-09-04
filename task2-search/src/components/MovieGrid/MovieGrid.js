import React, { Component } from 'react';
import style from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';
import styl from './MovieGrid.module.css';
import PropTypes from 'prop-types';


const filterTasks = (tasks, filter) => {
    return tasks.filter(task =>
        task.title.toLowerCase().includes(filter.toLowerCase()),
    );
};
export default class MovieGrid extends Component {
    state = {
        // items: this.props.items,
        search: '',
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })

    }
    render() {
        const { search } = this.state;
        const { items } = this.props;
        const SearchItem = filterTasks(items, search);
        return (
            <>
                <SearchBar value={search} onCha={this.handleChange} />
                <ul className={style.movieGrid}>
                    {SearchItem.length > 0 ? (
                        <MovieCard items={SearchItem} />
                    ) : (
                            <h1 className={styl.h1}>No matching results!</h1>
                        )}

                </ul>
            </>
        )
    }
}

MovieGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        posterUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
    }))
}
