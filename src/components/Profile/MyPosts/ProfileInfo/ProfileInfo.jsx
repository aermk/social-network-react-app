import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='http://placekitten.com/1700/200'></img>
      </div>
      <div  className={styles.descriptionBlock}>
        ava + descript
      </div>
    </div>
  )
}

export default ProfileInfo;