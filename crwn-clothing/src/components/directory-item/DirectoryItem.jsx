import React from 'react'
import "./DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{
                backgroundImage: `url(${category.imageUrl})`
            }} />
            <div className="body">
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default DirectoryItem