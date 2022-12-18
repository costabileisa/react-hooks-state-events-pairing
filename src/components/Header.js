import React from "react";
import ReactionButtons from "./ReactionButtons"

function Header({ video }) {
    return (
        <div>
            <h1>{video.title}</h1>
            <small>{video.views} Views | Uploaded {video.createdAt}</small>
            <br></br>
            <ReactionButtons video={video} />
        </div>
    )
}

export default Header;