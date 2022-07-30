import { Outlet, Link } from "react-router-dom"; // Outlet - v6 for rendering child components (pages)
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigations.scss";

const Navigation = () => {
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
                    <Link className="nav-link" to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />   {/* this is where other components (pages) will be rendered */}
        </>
    )
}

export default Navigation