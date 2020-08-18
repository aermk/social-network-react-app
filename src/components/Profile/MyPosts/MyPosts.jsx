import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  let postsElements = props.posts.map((p) => <Post message={p.message} likescounter={p.likescounter}/>)

  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text);
  }

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea ref={ newPostElement } onChange={ onPostChange } value={props.newPostText}/>
            </div>
            <div>
              <button onClick={ addPost }>Add post</button>
            </div>
          </div>
         <div className={styles.posts}>
            { postsElements }
         </div>
        </div>
  )
}

export default MyPosts;