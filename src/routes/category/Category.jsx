import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/categorySelector';
import { CategoryContainer, CategoryTitle } from './Category.styles';
import Spinner from '../../components/spinner/Spinner';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ?
                    <Spinner /> :
                    <CategoryContainer>
                        {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                    </CategoryContainer>
            }

        </>
    )
}

export default Category