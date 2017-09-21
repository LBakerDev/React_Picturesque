import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Photo from  './photo';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords) {
      this.setState({
        loading: true,
      });
      this.props.actions.getRecentPosts()
        .then(() => this.setState({loading: false}));
    }
  }

    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
        return (
            <div> 
                <div className="container">
                    {/*creating cards here. Looping over photo component*/}
                    {this.props.posts.map((post, i) => 
                        <Photo{...this.props} key={i} i={i} post={post} />)}
                  
                </div>
            </div>
                
        )
    }
}


function mapStateToProps(state) {
  return {
    locations: state.posts
  };
}

// Sets actions to this.props.action
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);