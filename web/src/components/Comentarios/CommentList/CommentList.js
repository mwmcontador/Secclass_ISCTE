import React from "react";

const CommentList = ({ comment_id }) => {
  console.log("Comentario", { comment_id });

  return (
    <tr className="table table-hover">
      <td type="date" scope="row">
        {comment_id.timestamp}
      </td>
      <td scope="row">{comment_id.comment}</td>
      <td scope="row">{comment_id.name}</td>
      <td scope="row">{comment_id.institution}</td>
      <td scope="row">{comment_id.status}</td>
    </tr>
  );
};

export default CommentList;
