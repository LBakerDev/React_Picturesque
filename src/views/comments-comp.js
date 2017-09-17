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
    //Creating form for user to enter name and comment
    handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting the form");
        const postId = this.props.params.id;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
    },
    render() {
        return(
        <div className="comment">
            {this.props.postComments.map(this.renderComment)}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="Author"/>
                <input type="text" ref="comment" placeholder="Comment"/>
                <input type="submit" hidden />
            </form>

        </div>
        )
    }

});

export default Comments;