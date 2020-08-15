import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
  console.log(props, 'Navbar')

  let sidebarElements = props.state.friends.map((f) => <Sidebar id={f.id} name={f.name}/>)
  return(
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messeges</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
      </div>

      <div className={styles.sidebar}>
        <h1>FRIENDS
          
        </h1>
        { sidebarElements }
      </div>
    </nav>
  )
}

export default Navbar;