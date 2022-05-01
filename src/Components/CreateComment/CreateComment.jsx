import React, { useState } from 'react';
const CreateComment = (props) => {
    //   state variable for comments
    const [commentText, setCommentText] = useState("");
    // console.log(commentText);
    
    return ( 
       <form>
      <input type= "text" placeholder= 'Enter a comment'  value={commentText} 
       onChange = {(event) => setCommentText(event.target.value)}
       ></input>
       <span><button type='submit'>Comment</button></span>
      </form> 
     );
}
 
export default CreateComment;