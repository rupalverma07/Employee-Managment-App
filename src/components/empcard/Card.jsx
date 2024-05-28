import React from 'react';
import styles from'./card.module.css'
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {
  const navigate = useNavigate()
  const editHandler = () =>{
    navigate('/editTask',{state:data})
}
  return (
    <div className={styles.card}>
      <div className={styles.col1}><img src={data.imageUrl} alt='card img' /></div>
      <div className={styles.col2}>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <button className={styles.intBtn} onClick={editHandler}>Update Task</button>
      </div>
    </div>
  )
}

export default Card
