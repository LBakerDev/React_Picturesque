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
                                    <img src={post.display_src} alt={post.caption} 
                                    className="card-img-top img-fluid" src=""/>
                                    
                                    <div className="card-block">
                                        <h4>{post.caption}</h4>
                                        {/* onClick binds action with reducer to increment */}
                                        <button onClick={this.props.increment.bind( null, i)} 
                                        className="likes">&hearts; {post.likes} </button>   
                                        <Link to={`/pictures/${post.code}`}>
                                        {/* code will be here to display comment bubble and count*/}
                                        <button>More</button>
                                        </Link>
                                            
                                    </div>
                                </div>
                            </div>
                              
            
                    </div>

        )
    }
})

export default Photo;