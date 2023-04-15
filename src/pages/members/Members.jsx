import styles from './Members.module.css'
import { useState } from 'react'

export const Members = () =>{
    const [name] = useState('')
    

    return(
        <div className={styles.Members}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Участники</h1>
                    <label>{name}</label>
                    <button>Пригласить участников</button>
                    <button>Начать</button>
                </div>
            </div>
        </div>
    )
}