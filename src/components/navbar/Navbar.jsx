import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const[userToken, setUserToken] = useState('')
  const[userDetails, setDetails] = useState({})
  const navigate = useNavigate() 
    const logoutHandler = () =>{
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      navigate("/")
      window.location.reload()
     
    }
    useEffect(() =>{
      const token = JSON.parse(localStorage.getItem("token"));
      const user = JSON.parse(localStorage.getItem("user"));
      if(token !== null){
        setUserToken(token)
      }
      if(user !== null){
        setDetails(user) 
      }
      
     
    },[])
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>MYOSPAZ</div>
        <div className={styles.navRight}>
          {userDetails.role === 'admin' ? (<div><Link to="/admin" >Home</Link></div>) : (<div><Link to="/employee" >Home</Link></div>)}
            {/* <div><Link to="/" >Home</Link></div> */}
            <div>About US</div>
            {userDetails.role === 'admin' ? (<div className={styles.navBtn} ><Link  to="/uploadTask">Upload Task</Link></div>) : (null)}
            
            {userToken === '' ? (<>
              <div><Link to="/login">Login</Link></div>
              <div><Link to="/">Register</Link></div>
            </>) : (<> <div>Welcome, {userDetails.fullname}</div><div onClick={logoutHandler} style={{cursor:"pointer"}}>Logout</div> </>)}
        </div>
    </div>
  )
}

export default Navbar