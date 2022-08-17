import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    DirectoryItemContainer,
    BackgroundImage,
    Body
} from './DirectoryItem.styles'
import { CategoryProps } from "../categories/Categories";

type DirectoryItemProps = {
    category: CategoryProps
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
    const { route, title, imageUrl } = category;
    const navigate = useNavigate();

    const goToShop = () => navigate(route)

    return (
        <DirectoryItemContainer onClick={goToShop}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem