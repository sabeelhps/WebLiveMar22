import React from 'react'
import styles from './Food.module.css';

const Food = (props) => {
  return (
    <li className={styles.food}>
    <div>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.desc}>{props.desc}</p>
        <p className={styles.price}>${ props.price}</p>
    </div>
    <div>
        <label>Amount</label>
        <input
            type="number"
            min="1"
            defaultValue={1}
        />
        <button className={styles['add-btn']}>+ Add</button>
    </div>
</li>
  )
}

export default Food