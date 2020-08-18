import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
// import Post from './MyPosts/Post/Post'

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo />
      <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addPost={props.addPost} updateNewPostChange={props.updateNewPostChange}></MyPosts>
    </div>
  )
  
}

export default Profile;