import React from "react";

function CommentButton({ onCommentClick, showComments }) {
    function handleClick() {
        onCommentClick()
    }

    return (
        <button onClick={handleClick}>
            {showComments ? "Hide Comments" : "Show Comments"}
        </button>
    )
};

export default CommentButton;