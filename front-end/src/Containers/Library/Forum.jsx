import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";

const DefaultComponent = () => {
  const data = [
    {
      userId: "02b",
      comId: "017",
      fullName: "User 01",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: []
    },
    {
      userId: "02b",
      comId: "017",
      fullName: "User 02",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "I think you have a point",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: []
    },
    {
      userId: "02b",
      comId: "017",
      fullName: "User 03",
      userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
      text: "good book",
      avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
      replies: []
    }
  ];
  return (
    <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=Riya&background=random",
        currentUserProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
        currentUserFullName: "user"
      }}
      logIn={{
        loginLink: "",
        signupLink: ""
      }}
      commentData={data}
    />
  );
};

export default DefaultComponent;
