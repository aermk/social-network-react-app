import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return( 
    <div className={styles.item}>
      <img src='https://lh3.googleusercontent.com/proxy/M76jLGSN1lSKvrnmZXJwil7w_lxlftPHBhJ0stvjHErss2CWI6T9ZSpOV-wRL0IYU7HCd-OYilmHfB2xAj64Z5tbkXuSBm4fw8p0PFBDCg'/>
      <div>{props.message}</div>
      <div>
        <span>like</span> {props.likescounter}
      </div>
    </div>
  )
}

export default Post;