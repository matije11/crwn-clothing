import React from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { selectCategoriesMap } from '../../store/categories/categorySelector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </>
    )
}

export default CategoriesPreview