import React, {Component} from 'react';
import { Link } from 'react-router';

class Photo extends Component {
  render() {
    const { post, i, comments } = this.props;

    return (
      <div className="row text-center">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            {/*img at the top in order to make fluid*/}
            <img src={post.display_src}
                 alt={post.caption}
                 className="card-img-top img-fluid" />

            <div className="card-block">
              <h4>{post.caption}</h4>
              <Link to={`/pictures/${post.code}`}>
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo;
