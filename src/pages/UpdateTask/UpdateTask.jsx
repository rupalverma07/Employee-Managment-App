import React, { useEffect, useState } from 'react';
import styles from './update.module.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UpdateTask = () => {
    const[formValue, setFormValue] = useState({
        // firstName:'',
        name:'',
        description:'',
        assigned_to:'',
        remark:''
    })
    const[taskId,setTaskId] = useState(null)
    const [newImage, setNewImage] = useState(null);
    const handleChange = ({target}) =>{
        
        const{name,value} = target;
        setFormValue(prevValue => ({...prevValue, [name]:value}))
    }
    const [selectedFile, setSelectedFile] = useState(null)
    const location = useLocation();
    const handleFileChange = (e) => {
        setNewImage(e.target.files[0]);
    };
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', formValue.name);
        formData.append('description', formValue.description);
        formData.append('assigned_to', formValue.assigned_to);
        if (newImage) {
            formData.append('image', newImage);
        }else{
            formData.append('image', selectedFile);
        }
        formData.append('remark', formValue.remark);

        try {
            const res = await axios.put(`http://localhost:8082/api/task/${taskId}`, formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(res)
            alert('Task updated successfully')
            // setAllEmployee(res.data)  
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
        if(location.state !== null){
        //   setIsEdit(true)
          const taskToEdit = location.state;
          // setDetails(property)
          console.log(taskToEdit)
        //   setEditId(updattedProperty._id)
        setFormValue({
            name: taskToEdit.name,
        description: taskToEdit.description,
        remark:taskToEdit.remark,
        assigned_to:taskToEdit.assigned_to
          })
          setTaskId(taskToEdit.id)
          setSelectedFile(taskToEdit.image)
      }
      },[])
    return (
        <div className={styles.container}>
           <h2>Update Your task</h2>
           <form className={styles.formContainer} onSubmit={handleSubmit}>
    
          <div>
            <label className={styles.formgroup}>Upload Image</label>
            <input type="file" className={styles.formInput} onChange={handleFileChange}  />
          </div>
          <div className={styles.formgroup}>
            <label>Remark</label>
            <input type="text" className={styles.formInput} name="remark" value={formValue.remark} onChange={handleChange}  />
          </div> 
          <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
      )
}

export default UpdateTask;
