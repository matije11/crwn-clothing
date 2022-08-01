import { useContext } from "react";
import { Outlet, Link } from "react-router-dom"; // Outlet - v6 for rendering child components (pages)
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./Navigations.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />   {/* this is where other components (pages) will be rendered */}
        </>
    )
}

export default Navigation