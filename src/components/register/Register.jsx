import React, { useState } from 'react';
import styles from './register.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[formData, setFormData] = useState({
        // firstName:'',
        fullname:'',
        email:'',
        password:'',
        role:''
    })
    const navigate = useNavigate()
    const handleChange = ({target}) =>{
        const{name,value} = target;
        setFormData(prevValue => ({...prevValue, [name]:value}))
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8082/api/auth/register`, formData);
            alert('User added successfully');
            navigate('/login');
          } catch (error) {
            alert('Error in registration');
            console.log(error)
          }
    }
    return (
        <div className={styles.container}>
           <h2>Register</h2>
           <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label>Full Name</label>
            <input className={styles.formInput} type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
          </div>
          
           {/* <div className={styles.formgroup}>
            <label>Last Name</label>
            <input type="text" className={styles.formInput} name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div> */}
          <div className={styles.formgroup}>
            <label>Email</label>
            <input type="text" className={styles.formInput} name="email" value={formData.email} onChange={handleChange} required />
          </div> 
          <div>
            <label className={styles.formgroup}>Password</label>
            <input type="text" className={styles.formInput} name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <label className={styles.formgroup}>Role</label>
            <input type="text" className={styles.formInput} name="role" value={formData.role} onChange={handleChange} required />
          </div>
          
          <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
      )
}

export default Register
