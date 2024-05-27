import React from 'react'

const AdminDashboard = () => {
    const[formData, setFormData] = useState({
        // firstName:'',
        name:'',
        description:'',
        assigned_to:'',
    })
    const [selectedFile, setSelectedFile] = useState(null)
    return (
        <div className={styles.container}>
           <h2>Fill Details For task</h2>
           <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label>Task Name</label>
            <input className={styles.formInput} type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          
           {/* <div className={styles.formgroup}>
            <label>Last Name</label>
            <input type="text" className={styles.formInput} name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div> */}
          <div className={styles.formgroup}>
            <label>Description</label>
            <input type="text" className={styles.formInput} name="description" value={formData.description} onChange={handleChange} required />
          </div> 
          <div>
            <label className={styles.formgroup}>Password</label>
            <input type="text" className={styles.formInput} name="assigned_to" value={formData.assigned_to} onChange={handleChange} required />
          </div>
          <div>
            <label className={styles.formgroup}>Upload Image</label>
            <input type="text" className={styles.formInput} name="role" value={formData.role} onChange={handleChange} required />
          </div>
          
          <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
      )
}

export default AdminDashboard
