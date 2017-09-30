import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import PhotoList from  './photoList';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    //this.createNew.bind(this);

    this.state = {
      loading: false,
      initialPull: false
    };
  }

  componentWillMount() {
    if (!this.state.initialPull) {
      if (!this.state.loading) {
        this.setState({
          loading: true,
          initialPull: true
        });
      }

      this.props.actions.getRecentPosts()
        .then(() => this.setState({loading: false}));
    }
  }

  // createNew() {
  //   this.props.actions.createNew(formData)
  //     .then(() => browserHistory.push('/posts/{code}'))
  // }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    console.log('props: ' + this.props);
    return (
        <div>
          <div className="jumbotron jumbotron-fluid text-center">
            {/*centers text inside jumbotron*/}
            <div className="container">
              <h1 className="display-1">Picturesque</h1>
              <p className="lead">Your photos. Your sharing</p>
              <p>
                <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                   href="pictures/new"
                   role="button">
                  Add a new Photo
                </a>
                {/*<form onSubmit={this.createNew}>

                </form>*/}
              </p>
            </div>
          </div>
            <div className="container">
                {/*creating cards here. Looping over photo component*/}
                {this.props.posts && <PhotoList posts={this.props.posts} />}
            </div>
        </div>

      )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

// Sets actions to this.props.action
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);