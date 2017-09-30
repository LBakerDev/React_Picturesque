// Use connect to inject data at the level we need
// Need to make actionCreators in order to expose actions to buttons
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';

class App extends React.Component {
  render() {
      return (
          <div>
              <div>Header</div>
            {this.props.children}
          </div>
      );
  }
}

// Surfaces state to component
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

// Two functions that take the state and dispatch and surfaces
// them via props in the component. 
export default  connect(mapStateToProps, mapDispatchToProps)(App);
