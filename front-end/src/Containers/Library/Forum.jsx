import { Button } from "@mui/material";
import React, { useState } from "react";

const commentSectionStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  width: "100%",
  padding: "20px",
  background: 'linear-gradient(50deg, black 0%, rgb(117, 112, 112)45%)'
};

const inputContainerStyle = {
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  marginBottom: "10px",
};

const inputStyle = {
  borderRadius: "5px",
  flex: 1,
  padding: "10px",
  border: "1px solid #ddd",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease", // Add a transition for scaling
  "&:hover": {
    transform: "scale(1.05)", // Scale up on hover
  },
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease", // Add a transition for scaling
  "&:hover": {
    transform: "scale(1.05)", // Scale up on hover
  },
};

const commentsStyle = {
  marginTop: "20px",
};

const commentStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  marginBottom: "10px",
};

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div style={commentSectionStyle}>
      <div style={{ width: '80%' }}>
        <h2 style={{ color: 'white' }}>Comment Section</h2>
        <div style={inputContainerStyle}>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            style={inputStyle}
          />
        </div>
        <Button onClick={handleCommentSubmit} variant="contained" style={buttonStyle}>
          Submit
        </Button>
        <div style={commentsStyle}>
          <h4 style={{ color: 'white' }}>Comments:</h4>
          {comments.map((comment, index) => (
            <div key={index} style={commentStyle}>
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
