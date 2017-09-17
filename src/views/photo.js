import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({
    render() {
        const { post, i, comments } = this.props;
        return (
            <div className="row text-center">
            
                        {/* picture.forEach(function(picture) { */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    {/*img at the top in order to make fluid*/}
                                    <img src={post.display_src} alt={post.caption} className="card-img-top img-fluid" src=""/>
                                    <div className="card-block">
                                        <h4>
                                            {post.caption}
                                        </h4>
                                        {/*<p className="card-text">Description</p>*/}
                                        <Link to={`/pictures/${post.code}`}>More</Link>
                                            
                                    </div>
                                </div>
                            </div>
                              
            
                    </div>

        )
    }
})

export default Photo;