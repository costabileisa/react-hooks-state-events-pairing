import video from "../data/video.js";
import VideoEmbed from "./VideoEmbed";
import Header from "./Header"
import Comments from "./Comments"

/* 
App
  VideoEmbed -> video.embedUrl
  Header -> video
    title -> video.title
    views, uploadDate -> video.views, video.createdAt
    ReactionButtons -> const [reactions, setReactions] useState({ likes, dislikes}) -> video
      likes, dislikes -> {upvotes, downvotes} = video
  Comments const [showComments, setShowComments] useState(true) -> video
    CommentButton -> showComments, onCommentClick
    showComments ? [comment amount, CommentList] 
    -comment amount -> video.comments.length
    -CommentsList -> video.comments
      CreateComment -> video.comments.id, user, comment
			  id -> id
        user -> video.user
        comment -> video.comment
*/

function App() {

  return (
    <div className="App">
      <VideoEmbed videoUrl={video.embedUrl} />
      <Header video={video} />
      <Comments video={video} />
    </div>
  );
}

export default App;
