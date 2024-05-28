import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css'
import axios from 'axios';

const AdminDashboard = () => {
    const[tasks, setTasks] = useState([])
    const employeeName = async(id) =>{
      try {
        const res = await axios.get('http://localhost:8082/api/users/'+id)
        console.log(res)
        const username = res.data[0].fullname
        // setTasks(res.data)  
        return username;
    } catch (error) {
        console.log(error)
    }
    }
    const getEmployeeTasks = async() =>{
        try {
            const res = await axios.get('http://localhost:8082/api/task')
            console.log(res)
            setTasks(res.data)  
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(() =>{
        getEmployeeTasks()
        // employeeName(2)
    },[])
   return(
    <>
    <h1>Employee Assigned Task</h1>
    {/* <div> */}
    <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Task Image</th>
            <th>Assigned To</th>
            <th>Remark</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.description}</td>
              <td><img src={employee.imageUrl} alt='task img'/></td>
              {/* <td>{employeeName(employee.assigned_to)}</td> */}
              <td>{employee.assigned_to}</td>
              <td>{employee.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* </div> */}
    </>
   )
}

export default AdminDashboard
