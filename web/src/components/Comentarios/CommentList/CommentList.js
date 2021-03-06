import React from "react";

const CommentList = ({ comment_id }) => {
  console.log("Comentario", { comment_id });

  return (
    <tr className="table table-striped">
      <td>{comment_id.date_string}</td>
      <td>{comment_id.comment}</td>
      <td>{comment_id.name}</td>
      <td>{comment_id.institution}</td>
      {/*<td>{comment_id.status}</td>*/}
    </tr>
  );
};

export default CommentList;
