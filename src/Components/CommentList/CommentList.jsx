const CommentList = (props) => {
    return (  
       <p>
          {/*  Displaying all the values stored in AllComments. */}
         {props.AllComments.map((comment) => {
           
            return(
              <div>
                <p>{comment.commentText}</p>
              </div>
            )

         }
         
         
         
         ) 
         
         }


       </p>



     );
}
 
export default CommentList;