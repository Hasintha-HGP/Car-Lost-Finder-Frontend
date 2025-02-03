import React, { useState, useRef, useEffect } from "react";
import "./Comment.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("Anonymous");
  const textareaRef = useRef(null);

  useEffect(() => {
    const carData = JSON.parse(localStorage.getItem("carData"));
    if (carData && carData.ownerName) {
      setUsername(carData.ownerName);
    }
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          name: username,
          text: newComment,
          likes: 0,
          liked: false,
        },
      ]);
      setNewComment("");
      textareaRef.current.focus();
    }
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].liked = !updatedComments[index].liked;
    updatedComments[index].likes += updatedComments[index].liked ? 1 : -1;
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          ref={textareaRef}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a Review..."
          rows="4"
          cols="50"
        />
        <button type="submit" disabled={!newComment.trim()}>
          Add Review
        </button>
      </form>

      <div className="comments-container">
        <div className="scrollable-comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <div className="comment-content">
                <h4 className="comment-author">{comment.name}</h4>
                <p className="comment-text">{comment.text}</p>
                <span className="comment-timestamp">{comment.timestamp}</span>
                <div className="like-section">
                  <button
                    onClick={() => handleLike(index)}
                    className={comment.liked ? "liked-button" : "like-button"}
                  >
                    👍 {comment.liked ? "Liked" : "Like"}
                  </button>
                  <span className="like-count">{comment.likes} Likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
