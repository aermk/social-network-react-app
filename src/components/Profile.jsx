import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return(
    <div className={styles.content}>
        <div>
          <img src='http://placekitten.com/1700/200'></img>
        </div>
        <div>
          ava + descript
        </div>
        <div>
          my posts
          <div>
            New post
          </div>
         <div className={styles.posts}>
            <div className={styles.item}>
              post 1
            </div>
            <div className={styles.item}>
              post 2
            </div>
         </div>
        </div>
      </div>
  )
}

export default Profile;