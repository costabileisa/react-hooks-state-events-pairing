import React from "react";
import CreateComment from "./CreateComment"

function CommentsList({ comments }) {
    const listComments = comments.map(comment => {
        return (
            <CreateComment 
            key={comment.id} 
            id={comment.id}
            user={comment.user}
            comment={comment.comment}
            />
        )
    })

    return (
        <>
            {listComments}
        </>
    )
};

export default CommentsList;