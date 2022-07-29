import { Outlet, Link } from "react-router-dom"; // v6 for rendering child components (pages)
import "./Navigations.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

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
                </div>
            </div>
            <Outlet />   {/* this is where other components (pages) will be rendered */}
        </>
    )
}

export default Navigation