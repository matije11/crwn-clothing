import { Outlet } from "react-router-dom"; // Outlet - v6 for rendering child components (pages)
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer
} from "./Navigation.styles";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { signOutStart } from "../../store/user/userAction";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const openCart = useSelector(selectIsCartOpen)
    const dispatch = useDispatch();

    const signOutUser = () => dispatch(signOutStart())
    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {openCart && <CartDropdown />}
            </NavigationContainer>
            <Outlet />   {/* this is where other components (pages) will be rendered */}
        </>
    )
}

export default Navigation