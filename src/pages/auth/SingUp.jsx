import React from "react";
import styles from './SingUp.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SingUp = () =>{
    const navigate = useNavigate('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pass, setPass] = useState('')
    const[email, setEmail] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name)
    }

    return(
        <div className={styles.singUp}>
            <form onSubmit={handleSubmit} className={styles.container}>
                <h1 className={styles.text}>Создать аккаунт</h1>
                <div className={styles.inputData}>
                    <label>Имя</label>
                    <input
                        value={name} onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Введите имя"></input>
                </div>
                <div className={styles.inputData}>
                    <label>Фамилия</label>
                    <input
                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Введите фамилию"></input>
                </div>
                <div className={styles.inputData}>
                    <label>Адрес Email</label>
                    <input
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Введите email"></input>
                </div>
                <div className={styles.inputData}>
                    <label>Придумайте пароль</label>
                    <input
                        value={pass} onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="Введите пароль"></input>
                </div>
                <div className={styles.btn}>
                    <button 
                        onClick={() => navigate('/SingIn')}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
}