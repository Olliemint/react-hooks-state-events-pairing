
import Comment from './Comment'
const Comments = ({data,deleted}) => {
  return (
    <div>
      <h1>
        {data.length} {data.length === 1 ? "Comment" : "Comments"}
      </h1>

      <div className="comments">
        {data.map((comment) => (
          <Comment comments={comment} deleted={deleted} />
        ))}
      </div>
    </div>
  );
}

export default Comments