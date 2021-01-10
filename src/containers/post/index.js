import React, { useContext } from 'react';
import { Comment } from '../../components';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../contexts/user';
import { db, storage } from '../../firebase';
import "./style.css";
export default function Post({
    profileUrl,
    username,
    id,
    photoURL,
    caption,
    comments,
}) {

    const [user, setUser] = useContext(UserContext).user;
    const deletePost = () => {
        // delete the image from firebase storage

        // get ref to the image file we like to delete
        var imageRef = storage.refFromURL(photoURL);

        // delete the file
        imageRef
            .delete()
            .then(function(){
                console.log("delete successfull");
            }).catch(function(error){
                console.log(`Error ${error}`);
            });

            //2 delete the post info from firebase firestore
            db.collection("posts").doc(id).delete()
            .then(function(){
                console.log("delete post info successfull");
            }).catch(function(error){
                console.log(`Error post info delete ${error}`);
            });
    };

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__headerLeft">
                    <img className="post__profilePic" src={profileUrl} />
                    <div className="bigc">
                        <div className="smallc"></div>
                    </div>
                    <p style={{marginLeft: "20px", fontSize:"15px", fontWeight:"600", color: "#000000", letterSpacing:"0.8px"}}>{username}</p>
                </div>
                {user ? <button onClick={deletePost} className="post__delete">Delete</button> : <></>}
                
            </div>
            <div className="post__caption">
                <p>{caption}</p>
            </div>
            <div className="post__center">
                <img className="post__photoUrl" src={photoURL} />
            </div>

            {comments ? comments.map((comment) => 
                <Comment username={comment.username}
                caption={comment.comment}/>) : <></>   }

            <CommentInput comments={comments} id={id} />
        </div>
    );
}
// ,fontSize: "15px", fontWeight: "550", color: "#626262", letter-spacing: "0.8px"