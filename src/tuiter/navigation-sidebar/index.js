import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationSidebar = (

) => {
    const {pathname} = useLocation();
    const active = pathname.split('/')[2];
    return (
            <>
        <div>
        <div className="list-group">
            <a href="/tuiter" className="list-group-item">
                <i className="bi bi-twitter"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-chat-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;More</span>
            </a>
        </div>
        <div className="d-grid mt-2">
        <a href="tweet.html"
           className="btn btn-primary btn-block rounded-pill w-100">
            Tuit</a>
        </div>
        </div>
            </>
    );
};
export default NavigationSidebar;