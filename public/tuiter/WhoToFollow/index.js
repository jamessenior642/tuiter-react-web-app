import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return(`
      <ul class="list-group">
      <li class="fw-bold list-group-item">Who To Follow</li>
         ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
      </ul>
   `);
}
export default WhoToFollowList;