import React from 'react';


const MovieCard = ({ items }) => (
    <>
        {
            items.map(item =>
                <li key={item.id}>
                    <div>
                        <img src={item.posterUrl} alt="asd" />
                        <div class="content">
                            <h2 class="title">{item.title}</h2>
                            <p class="descr">{item.overview}</p>
                        </div>
                    </div>
                </li>)
        }
    </>
)

export default MovieCard;