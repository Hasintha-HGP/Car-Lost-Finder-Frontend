import React, { useState, useRef, useEffect } from "react";
import CommentService from "../Service/CommentService";
import "./Comment.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("Anonymous"); 
  const textareaRef = useRef(null);

  
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails && userDetails.user.name) {
      setUsername(userDetails.user.name); 
    }

    CommentService.getReviews()
      .then((data) => {
        if (Array.isArray(data.reviews)) {
          const normalizedReviews = data.reviews.map((review) => ({
            ...review,
            timestamp: review.timestamp || new Date().toISOString(),
          }));
          setComments(normalizedReviews);
        } else {
          console.error("Unexpected data format:", data);
          setComments([]);
        }
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const trimmedComment = newComment.trim();
  
    if (trimmedComment) {
      const newReview = {
        name: username,
        text: trimmedComment,
        timestamp: new Date().toISOString(),
      };
  
      try {
        const savedComment = await CommentService.addReview(newReview);
        setComments((prevComments) => [...prevComments, savedComment]);
        setNewComment("");
        textareaRef.current.focus();
  
        // ✅ Refresh the page after successfully adding the comment
        window.location.reload();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    } else {
      alert("Please enter a valid comment.");
    }
  };
  


  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return isNaN(date) ? "Invalid Date" : date.toLocaleString();
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
                <h4 className="comment-author">{comment.name || "Anonymous"}</h4>
                <p className="comment-text">{comment.text}</p>
                <small>{formatTimestamp(comment.timestamp)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentSection;