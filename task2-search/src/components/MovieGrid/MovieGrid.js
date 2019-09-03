import React, { Component } from 'react';
import style from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';
import SearchBar from '../SearchBar/SearchBar';



const filterTasks = (tasks, filter) => {
    return tasks.filter(task =>
        task.title.toLowerCase().includes(filter.toLowerCase()),
    );
};
export default class MovieGrid extends Component {
    state = {
        items: this.props.items,
        search: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })

    }
    render() {
        const { items, search } = this.state;
        const SearchItem = filterTasks(items, search);

        return (
            <>
                <SearchBar value={search} onCha={this.handleChange} />
                <ul className={style.movieGrid}>
                    <MovieCard items={SearchItem} />
                </ul>
            </>
        )
    }
}
