import React from 'react';

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button>&times;</button>
                </p>
            </div>
        )
    },
    render() {
        return(
        <div className="comment">
            {this.props.postComments.map(this.renderComment)}
        </div>
        )
    }

});

export default Comments;