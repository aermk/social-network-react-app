import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
            <Post message='I study react js' likescounter='15'/>
            <Post message='My heart is broken ;(' likescounter='1'/>
         </div>
        </div>
  )
}

export default MyPosts;