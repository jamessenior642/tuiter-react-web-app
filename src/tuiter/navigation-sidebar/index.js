import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
        <div className="list-group">
            <a className="list-group-item">
                <i className="bi bi-twitter"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Tuiter</span>
            </a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span>
            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span>
            </a>
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
    );
};
export default NavigationSidebar;