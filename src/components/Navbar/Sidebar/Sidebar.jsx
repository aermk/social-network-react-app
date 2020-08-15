import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
  console.log(props, 'Sidebar')
  let path = '/profile/' + props.id;
  return(
    <div className={styles.frends}>
       <div className={styles.item}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default Sidebar;