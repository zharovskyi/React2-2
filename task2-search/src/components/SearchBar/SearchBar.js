import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({ value, onCha }) => (
    <input name="search" type="text" value={value} className={style.input} onChange={onCha} />
)



export default SearchBar;
