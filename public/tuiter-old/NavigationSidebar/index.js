const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Notifications</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Messages</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Bookmarks</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;Profile</span></a></a>
                <a href="#"
                   class="list-group-item list-group-item-action">
                    <i class="fa fa-circle"></i>
                    <span class="d-done d-xl-inline d-none d-sm-none">&nbsp;More</span></a></a>
                    
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill w-100">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;