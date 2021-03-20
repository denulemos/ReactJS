import React from "react";

import "./NewsItems.css";

export default function NewsItem({newsItem, handleClick, willVanish}){
    const {title, image, id} = newsItem;
    const classes = 'newsItem ' + (willVanish ? 'vanishing' : '');
    return (
        <div className={classes} onClick={() => handleClick(id)}>
            <p>{title}</p>
            <figure><img src={image} /></figure>
        </div>
    )
}

NewsItem.defaultProps = {
            willVanish: false
}