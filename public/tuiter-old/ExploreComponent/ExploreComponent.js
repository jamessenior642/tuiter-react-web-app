import PostSummaryList
    from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row align-items-center">
                <div class=" col-11 ">
                    <div class="input-group border rounded-pill">
                        <span class="input-group-text  bg-transparent border-0 ">
                            <i class="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Search Tuiter"
                               class="form-control bg-transparent border-0 rounded-pill">
                    </div>
                </div>
                <div class="col-1">
                    <i class=" text-primary fas fa-cog fa-2x wd-gear "></i>
                </div>
           </div>
           <!-- nav-->
           <ul class="nav mb-2 nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link " href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/spacex.jpg" class="w-100 rounded" />
                <h1 class="position-absolute bottom-0 left-0 text-white px-1 wd-titletext">SpaceX's Starship</h1>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
