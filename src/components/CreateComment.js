import React from "react";

function CreateComment({ id, user, comment }) {
    return (
        <div id={id}>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}
export default CreateComment;