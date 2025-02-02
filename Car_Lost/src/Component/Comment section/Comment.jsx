import React, { useState } from "react";
import "./Comment.css";

function CommentSection() {
  const [comments, setComments] = useState([
    
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          name: "Anonymous",
          profilePic: "https://via.placeholder.com/40",
          text: newComment,
          likes: 0,
          liked: false,
        },
      ]);
      setNewComment("");
    }
  };

  const handleLike = (index) => {
    const updatedComments = [...comments];
    if (!updatedComments[index].liked) {
      updatedComments[index].likes += 1;
      updatedComments[index].liked = true;
    }
    setComments(updatedComments);
  };

  return (
    <div className="comment-section">
      

      
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a Review..."
          rows="4"
          cols="50"
        />
        <button type="submit">Add Review</button>
      </form>

      
      <div className="comments-container">
        <div className="scrollable-comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <img src={comment.profilePic} alt="Profile" className="profile-pic" />
              <div className="comment-content">
                <h4 className="comment-author">{comment.name}</h4>
                <p className="comment-text">{comment.text}</p>
                <div className="like-section">
                  <button
                    onClick={() => handleLike(index)}
                    disabled={comment.liked}
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
