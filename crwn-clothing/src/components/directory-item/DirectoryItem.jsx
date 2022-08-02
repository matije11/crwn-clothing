import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body
} from './DirectoryItem.styles'

const DirectoryItem = ({ category }) => {
    const navigate = useNavigate();

    const goToShop = () => navigate(`/shop/${category.title.toLowerCase()}`)

    return (
        <DirectoryItemContainer onClick={goToShop}>
            <BackgroundImage imageUrl={category.imageUrl} />
            <Body>
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem