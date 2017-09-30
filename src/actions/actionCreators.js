import PostsApi from '../data/postsApi';
import posts from '../data/posts';

export const GET_RECENT_POSTS_SUCCESS = 'GET_RECENT_POSTS_SUCCESS';


// increment

export function increment(index) {
    return {
        type: "INCREMENT_LIKES",
        index
    }
}


// add comment action

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment action

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

/*
POSTS actions:
 */

export function getRecentPostsSuccess(posts) {
  console.log(posts);
  return {
    type: GET_RECENT_POSTS_SUCCESS,
    posts
  };
}

export function getRecentPosts() {
    //return a connect wrapped function:
    return function(dispatch) {
        //call into the api:
        return PostsApi.getLatestPosts().then(posts => {
            //call connect's dispatcher to provide posts to reducer:
            dispatch(getRecentPostsSuccess(posts));
        })
          .catch(err => {
              throw(err);
          });
    }
}

// export function createNewPost(newPost) {
//   return function(dispatch) {
//     //call into the api:
//     return PostsApi.createPost(newPost).then(post => {
//       //call connect's dispatcher to provide posts to reducer:
//       dispatch(createNewPostSuccess(post));
//     })
//       .catch(err => {
//         throw(err);
//       });
//   }
// }