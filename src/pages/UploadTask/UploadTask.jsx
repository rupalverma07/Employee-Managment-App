import React, { useEffect, useState } from 'react';
import styles from './upload.module.css'
import axios from 'axios';
const UploadTask = () => {
    const[formValue, setFormValue] = useState({
        // firstName:'',
        name:'',
        description:'',
        assigned_to:'',
        remark:''
    })
    const[allEmployee, setAllEmployee] = useState([])
    const handleChange = ({target}) =>{
        
        const{name,value} = target;
        setFormValue(prevValue => ({...prevValue, [name]:value}))
    }
    const [selectedFile, setSelectedFile] = useState(null)
    const handleFileChange = (e) =>{
        console.log(e)
        setSelectedFile(e.target.files[0])
    }
    const getEmployeeList = async() =>{
        try {
            const res = await axios.get('http://localhost:8082/api/users/employees')
            console.log(res)
            setAllEmployee(res.data)  
        } catch (error) {
            console.log(error)
        }
        
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name',formValue.name)
        formData.append('description',formValue.description)
        formData.append('image',selectedFile)
        formData.append('assigned_to',formValue.assigned_to)
        formData.append('remark',formValue.remark)
        try {
            const res = await axios.post('http://localhost:8082/api/task/new', formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(res)
            alert('File uploaded successfully')
            // setAllEmployee(res.data)  
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
getEmployeeList()
    },[])
    return (
        <div className={styles.container}>
           <h2>Fill Details For task</h2>
           <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label>Task Name</label>
            <input className={styles.formInput} type="text" name="name" value={formValue.name} onChange={handleChange} required />
          </div>
          
           {/* <div className={styles.formgroup}>
            <label>Last Name</label>
            <input type="text" className={styles.formInput} name="lastName" value={formValue.lastName} onChange={handleChange} required />
          </div> */}
          <div className={styles.formgroup}>
            <label>Description</label>
            <input type="text" className={styles.formInput} name="description" value={formValue.description} onChange={handleChange} required />
          </div> 
          <div>
            <label className={styles.formgroup}>Assign to</label>
            <select className={styles.formInput} name="assigned_to" value={formValue.assigned_to}  onChange={handleChange} required>
            <option value="">Select Employee</option>
            {allEmployee.length>0 && allEmployee.map(elem =>(
                <option key={elem.id} value={elem.id}>{elem.fullname}</option>
            ))}
            </select>
          </div>
          
          <div>
            <label className={styles.formgroup}>Upload Image</label>
            <input type="file" className={styles.formInput} onChange={handleFileChange} required />
          </div>
          <div className={styles.formgroup}>
            <label>Remark</label>
            <input type="text" className={styles.formInput} name="remark" value={formValue.remark} onChange={handleChange} required />
          </div> 
          <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
      )
}

export default UploadTask
