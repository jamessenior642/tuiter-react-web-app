import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./post.js";
const PostSummaryList = () => {
    return(`
      <ul class="list-group">
         ${
        exploreItems.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
      </ul>
   `);
}
export default PostSummaryList;