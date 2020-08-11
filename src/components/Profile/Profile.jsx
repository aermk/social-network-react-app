import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
// import Post from './MyPosts/Post/Post'

const Profile = (props) => {
  console.log(props);
  return(
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts}></MyPosts>
    </div>
  )
  
}

export default Profile;