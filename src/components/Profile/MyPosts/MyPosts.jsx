import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  let postsElements = props.posts.map((p) => <Post message={p.message} likescounter={p.likescounter}/>)

  let newPostElement = React.createRef();

  const addPost = () => {
     debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea ref={ newPostElement }></textarea>
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