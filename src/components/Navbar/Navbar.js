import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";


const Navbar = () => {

    const [isScrolled, setIsScrolled] =  useState(false);
    const { dispatch } = useContext(AuthContext);

    const { user } = useContext(AuthContext);
    const admin = user ? user.isAdmin : false;

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0? false: true);
        return () => (window.onscroll=null);
    };

    return(
        <div className={isScrolled? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mern-project-images.appspot.com/o/Netflix.png?alt=media&token=029cbb4d-b2f7-4fdb-9469-3cc8a9c45ae1" alt="" />
                    <Link className="menu-item" to="/"><span>Home</span></Link>
                    <Link className="menu-item" to="/series"><span>TV Shows</span></Link >
                    <Link className="menu-item" to="/movies"><span>Movies</span></Link>
                    {/* <span>New and Popular</span>
                    <span>My List</span> */}
                    {admin && <Link className="menu-item" to="/admin"><span>Admin</span></Link>}
                </div>
                <div className="right">
                    <Search className="icons" />
                    <span>Children</span>
                    <Notifications className="icons" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/mern-project-images.appspot.com/o/About-me.png?alt=media&token=b5cb13c1-59b3-4cec-841b-d8b421056fc6" alt="" />
                    <div className="user-profile">
                        <ArrowDropDown className="icons" />
                        <div className="profile-dropdown">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;