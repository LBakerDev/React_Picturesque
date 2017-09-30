// a reducer takes in two things in order to modify the state

// 1. is the action(info about what happened)
// 2. Copy of the current state
import initialState from './initialState';
import {GET_RECENT_POSTS_SUCCESS} from '../actions/actionCreators';

// within each reducer, we're dealing just the section of state that the reducer cares about.
// in this case, state.posts.
function posts(state = initialState.posts, action) {
    switch(action.type) {
        // case 'INCREMENT_LIKES' :
        // console.log("incrementing likes");
        // const i = action.index;
        //
        //
        // // return the updated state. Takes in state of likes on posts before and after
        // // the one we click. Returns the states of those and increments the one we select.
        // return [
        //     ...state.slice(0,i), // before the like we are updating
        //     {...state[i], likes: state[i].likes + 1},
        //     ...state.slice(i+1), // after the like we are updating
        // ];

      case GET_RECENT_POSTS_SUCCESS:
          console.log(action);
          return action.posts;

        default: 
            return state;
    }
}

export default posts;