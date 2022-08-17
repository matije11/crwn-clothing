import { useSelector } from 'react-redux'
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import Spinner from '../../components/spinner/Spinner';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categorySelector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            {isLoading ?
                <Spinner /> :
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })}
        </>
    )
}

export default CategoriesPreview