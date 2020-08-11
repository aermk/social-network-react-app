import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'I study react js', likescounter: '15'},
    {id: 2, message: 'My heart is broken ;(', likescounter: '1'},
  ]
  
  let postsElements = posts.map((p) => <Post message={p.message} likescounter={p.id}/>)

  return(
        <div className={styles.postsBlock}>
          <h3>my posts</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
         <div className={styles.posts}>
            { postsElements }
         </div>
        </div>
  )
}

export default MyPosts;