import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './empdeshboard.module.css'
import Card from '../../components/empcard/Card';
const EmpDashboard = () => {
const[tasks,setTasks] = useState([])
    const access_token = JSON.parse(localStorage.getItem('token'));
    const getTasks = async() =>{
        try {
            const res = await axios.get('http://localhost:8082/api/task/empTask' ,{
                headers:{
                  'Authorization':`${access_token}`
                }
              })
            console.log(res)
            setTasks(res.data)  
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        getTasks()
    },[])
  return (
    <div className={styles.container}>
      {tasks.length>0?(tasks.map(item => <Card data={item} />)):('No task available')}
    </div>
  )
}

export default EmpDashboard
