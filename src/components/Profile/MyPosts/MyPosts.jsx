import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return(
        <div>
          my posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
         <div className={styles.posts}>
            <Post message='I study react js' likescounter='15'/>
            <Post message='My heart is broken ;(' likescounter='1'/>
         </div>
        </div>
  )
}

export default MyPosts;