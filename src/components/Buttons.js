
const Buttons = ({toggle,togglestate,thumbs_up,thumbs_down,yes,no}) => {
  return (
    <div>
      <button className="btns" type="submit" onClick={yes}>
        {thumbs_up}
        👍
      </button>
      <button className="btns" type="submit" onClick={no}>
        {thumbs_down} 👎
      </button>
      <div className="toggle">
        <button type="submit" onClick={() => toggle(!togglestate)}>
          {togglestate ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
    </div>
  );
}

export default Buttons