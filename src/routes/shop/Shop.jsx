import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { fetchCategoriesAsync } from '../../store/categories/categoryAction';

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategories = () => {
            dispatch(fetchCategoriesAsync())
        }
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop