import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

const Comment = ({ comments,deleted }) => {
  return (
    <div>
      <div key={comments.id} className="comment">
        <div className='flex'>
          <FaRegTimesCircle
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => deleted(comments.id)}
          />
        </div>
        <strong>{comments.user}</strong>

        <p>{comments.comment}</p>
      </div>
    </div>
  );
};

export default Comment