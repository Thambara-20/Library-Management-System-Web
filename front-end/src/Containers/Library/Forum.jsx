import { Button } from "@mui/material";
import React, { useState } from "react";
import { fetchForumData } from "../../services/ForumService";
import { AddComment } from "../../services/ForumService";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from "../../services/ForumService";

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
  transition: 'transform 0.2s', // Add a transition for smooth scaling
  "&:hover": {
    transform: 'scale(1.1)' // Scale up the element on hover
  }
};

const commentStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  width: '100%',
  marginBottom: "10px",
  marginRight: '10px',
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",

};


const CommentSection = ({ title }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment) {
      try {
        await AddComment({ title: title, comment: newComment });
        setComments([...comments, { text: newComment, name: "Me" }]);
      }
      catch (err) {
        console.log(err);
      }
      setNewComment("");
    }
  };
  useState(() => {
    const fetchData = async () => {
      fetchForumData(title).then((data) => {
        setComments(data);

      });
    }

    fetchData();
  }, []);

  const handleDelete = async(id) => {
    try{
      await deleteComment(id);
      setComments(comments.filter((comment)=>comment.id!==id));
    }
    catch(err){
      console.log(err);
    }
  }
  

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
          {comments.map((comment) => (
            <div  style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'darkred', // You can choose a color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  marginRight: '10px',
                  transition: 'transform 0.2s', // Add a transition for smooth scaling
                }}
              >
                {comment.name.substring(0, 2).toUpperCase()}
              </div>

              <div style={commentStyle}>
                {comment.text}
              </div>
              <Button
                aria-label="Delete"
                color="secondary"
                onClick={()=>handleDelete(comment.id)}
                style={{
                  backgroundColor: 'black',
                  marginTop: '0px',
                  marginBottom: '10px',
                  paddingRight: 0,
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  transition: 'transform 0.2s', // Add a transition for smooth scaling
                  "&:hover": {
                    transform: 'scale(1.1)' // Scale up the element on hover
                  }
                }}
              >
                <DeleteIcon />
              </Button>



            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default CommentSection;
