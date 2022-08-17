import { FC } from 'react'
import ProductCard from '../product-card/ProductCard';
import {
    CategoryPreviewContainer,
    TitleLink,
    Preview
} from './CategoryPreview.styles'
import { CategoryItem } from '../../store/categories/categoryTypes';

type CategoryPreviewProps = {
    title: string,
    products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
            </h2>
            <Preview>
                {products.filter((_, index) => index < 4)
                    .map(product => <ProductCard key={product.id} product={product} />)}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview