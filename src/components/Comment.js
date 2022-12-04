import React from 'react'
import { FaBackspace } from "react-icons/fa";

const Comment = ({ comments,deleted }) => {
  return (
    <div>
      <div key={comments.id} className="comment">
        <div className='flex'>
          <strong>{comments.user}</strong>
          <span>
            <FaBackspace style={{ color: "red", cursor: "pointer" }} onClick={()=>deleted(comments.id)} />
          </span>
        </div>
        <p>{comments.comment}</p>
      </div>
    </div>
  );
};

export default Comment