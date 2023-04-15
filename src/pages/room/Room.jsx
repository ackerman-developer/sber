import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Room.module.css'

export const Room = () =>{
    const navigate = useNavigate('')

    return(
        <div className="room">
            <div className={styles.container}>
                <img
                    className={styles.logo} 
                    src="/img/logo.png" alt="logo"/>
                <h1 className={styles.title}>Scrum</h1>
                <button
                    className={styles.createBtn}
                    onClick={() => navigate('/SingUp')}>Создать комнату</button>
            </div>
        </div>
    )
}