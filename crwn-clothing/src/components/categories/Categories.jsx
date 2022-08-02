import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem';
import "./Categories.scss";

const Categories = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map(category => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </div>
    )
}

export default Categories