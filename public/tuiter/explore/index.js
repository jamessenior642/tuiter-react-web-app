import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollow/index.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";

function exploreComponent() {
    // eslint-disable-next-line no-undef
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
    ${WhoToFollowList()}
   </div>
  </div>
   `);
}
// eslint-disable-next-line no-undef
$(exploreComponent);