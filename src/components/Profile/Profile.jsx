import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return(
    <div className={styles.content}>
      <div>
        <img src='http://placekitten.com/1700/200'></img>
      </div>
      <div>
        ava + descript
      </div>
      <MyPosts />
    </div>
  )
  
}

export default Profile;