import React, {Component} from 'react';
import Photo from './photo';
import Comments from './comments-comp';

// import comments

class Show extends Component {
    render() {
        // index of post
        const i = this.props.posts.findIndex((post) => 
        post.code === this.props.params.id);
        
        const post = this.props.posts[i];
        const postComments = this.props.comments[this.props.params.id] || [];
        return (
            <div>
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
}

export default Show;