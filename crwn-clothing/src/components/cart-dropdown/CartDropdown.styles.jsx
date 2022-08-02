import styled from 'styled-components'
import {
    BaseButton,
    GoogleSignIn,
    Inverted
} from '../button/Button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 260px;
    height: 360px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px 10px 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    
    ${BaseButton}
    ${GoogleSignIn}
    ${Inverted} {
        margin-top: auto;
    }
`
export const CartItems = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`