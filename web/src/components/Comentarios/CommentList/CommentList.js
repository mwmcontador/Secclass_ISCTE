import React from "react";

const CommentList = ({ comment_id }) => {
  return (
    <tr className="table table-hover">
      <td scope="row">{comment_id}</td>
      <td scope="row">
        User: Admin, Code:Co_20,
        Status:New","timestamp":"2021-07-28T00:00:00.000Z
      </td>
      <td scope="row">Manoel Melo</td>
      <td scope="row">ISTAR</td>
      <td>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ação
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CommentList;
