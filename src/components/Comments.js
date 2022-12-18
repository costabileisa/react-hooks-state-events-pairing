import React, { useState } from "react";
import CommentButton from "./CommentButton"
import CommentsList from "./CommentsList";

function Comments({ video }) {
    const [showComments, setShowComments] = useState(true);

    function onCommentClick() {
        setShowComments(currentValue => !currentValue)
    }

    return (
        <div className="comments">
            <CommentButton showComments={showComments} onCommentClick={onCommentClick} />
            {showComments ? 
            [<h2>{video.comments.length} Comments</h2>, 
            <CommentsList comments={video.comments} />] : null}
        </div>
    )
};

export default Comments;