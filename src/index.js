import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard.js";

import CommentDetail from "./CommentDetail.js";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentText="Sample Comment Text 1"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:30AM"
        commentText="Sample Comment Text 2"
        avatar={faker.image.avatar()}
      />
       </ApprovalCard>
       <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 2:45PM"
        commentText="Sample Comment Text 3"
        avatar={faker.image.avatar()}
      />
       </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
