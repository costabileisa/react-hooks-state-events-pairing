import React from "react";

function VideoEmbed({ videoUrl }) {
    return (
        <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}

export default VideoEmbed;