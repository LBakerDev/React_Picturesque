// Use connect to inject data at the level we need
// Need to make actionCreators in order to expose actions to buttons

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

// Surfaces state to component
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// Surfaces action to component
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


// Two functions that take the state and dispatch and surfaces
// them via props in the component. 
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;