import React, { useState } from "react";

function ReactionButtons({ video }) {
    const { upvotes, downvotes } = video;
    const [count, setCount] = useState({
        likes: upvotes,
        dislikes: downvotes
    })

    function handleReaction(event) {
        setCount(currentValue => {
            return {
                ...count, 
                [event.target.id]: currentValue[event.target.id] + 1
            }
        })
    }

    return (
        <div className="reaction-buttons">
            <button id={"likes"} value={count.likes} onClick={handleReaction}>{count.likes} 👍</button>
            <button id={"dislikes"} value={count.dislikes} onClick={handleReaction}>{count.dislikes}👎</button>
        </div>
    )
}

export default ReactionButtons;