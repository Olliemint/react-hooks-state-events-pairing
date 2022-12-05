
import Comment from "./Comment";
const Comments = ({
  data,
  deleted,
  findComment,
  onFindComment,
  foundComment,
}) => {
  return (
    <div>
      <div className="search">
        <form action="" onSubmit={foundComment}>
          <input
            type="search"
            value={findComment}
            onChange={(e) => onFindComment(e.target.value)}
            placeholder="Search comment"
          />
          <span className="icon">
            <button className="icon-data">Search</button>
          </span>
        </form>
      </div>
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
};

export default Comments;
