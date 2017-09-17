import React, {Component} from 'react';
import Photo from './photo';
import Comments from './comments-comp';

// import comments

class Show extends Component {
    render() {
        // index of post
        const i = this.props.posts.findIndex((post) => 
        post.code === this.props.params.id);
        console.log(i);
        const post = this.props.posts[i];
        console.log(post);
        return (
            <div>
                <Photo i={i} post={post} {...this.props} />
            </div>
        )

        
    }
}

export default Show;