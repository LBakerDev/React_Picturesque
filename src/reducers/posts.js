// a reducer takes in two things in order to modify the state

// 1. is the action(info about what happened)
// 2. Copy of the current state

// on initial run, state is empty array
function posts(state = [], action) {
console.log(state, action);
console.log("The post will change");
return state; 
}

export default posts;