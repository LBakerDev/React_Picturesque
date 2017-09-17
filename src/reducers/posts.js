// a reducer takes in two things in order to modify the state

// 1. is the action(info about what happened)
// 2. Copy of the current state

// on initial run, state is empty array
function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        console.log("incrementing likes");
        const i = action.index;

        
        // return the updated state
        return [
            ...state.slice(0,i), // before the like we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i+1), // after the like we are updating
        ]
        default: 
            return state;
    }
}

export default posts;