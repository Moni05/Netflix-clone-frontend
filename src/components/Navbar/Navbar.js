import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";


const Navbar = () => {

    const [isScrolled, setIsScrolled] =  useState(false);
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0? false: true);
        return () => (window.onscroll=null);
    };

    return(
        <div className={isScrolled? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src="https://i.ibb.co/NVTYFhb/Netflix.png" alt="" />
                    <Link className="menu-item" to="/"><span>Home</span></Link>
                    <Link className="menu-item" to="/series"><span>TV Shows</span></Link >
                    <Link className="menu-item" to="/movies"><span>Movies</span></Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icons" />
                    <span>Children</span>
                    <Notifications className="icons" />
                    <img src="https://i.ibb.co/KwQKrD1/About-me.png" alt="" />
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