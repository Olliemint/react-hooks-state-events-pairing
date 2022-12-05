import {useState} from "react";

import video from "../data/video.js";
import Banner from "./Banner.js";
import Buttons from "./Buttons.js";
import Comments from "./Comments.js";

const Video = () => {
    console.log("Here's your data:", video.comments);
    
    const [toggleComments, setToggleComments] = useState(true)
    const array = video.comments
    console.log(array.length)

    const [upvotes, setUpvotes] = useState(278)
    const [downvotes, setdownvotes] = useState(94);
    const [data, setData] = useState(array);
    const [search, setSearch] = useState("")
    

    function Upvote() {
        
       let count = upvotes + 1
        setUpvotes(count)
        
    }
    function Downvote() {
      let count = downvotes + 1;
      setdownvotes(count);
    }
    
    function DeleteComment(id) {
        setData(data.filter((comment) => comment.id !== id));
    }
    
    function Search(e) {
        e.preventDefault()
        setData(data.filter((comment) => comment.user === search))
        
        setSearch("")
    }
  return (
    <div className="video-data">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div>
        <Banner />
        <Buttons
          toggle={setToggleComments}
          togglestate={toggleComments}
          thumbs_up={upvotes}
          thumbs_down={downvotes}
          yes={Upvote}
          no={Downvote}
        />

        <div>
          <div>
            <hr />
          </div>
          
          {toggleComments && <Comments foundComment={Search} findComment={search} onFindComment={setSearch} deleted={DeleteComment} data={data} />}
        </div>
      </div>
    </div>
  );
};

export default Video;
