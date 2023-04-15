import React from "react";
import styles from './SingIn.module.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SingIn = () =>{
    useEffect(() => {
        document.title = 'Авторизация'
    })

    const [pass, setPass] = useState('')
    const[email, setEmail] = useState('')

    const navigate = useNavigate('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
    }

    return(
        <div className={styles.singIn}>
            <form onSubmit={handleSubmit} className={styles.conteiner}>
                <h1 className={styles.text}>Войти в аккаунт</h1>
                <div className={styles.inputData}>
                    <label>Адреч Email</label>
                    <input
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Введите email"></input>
                </div>
                <div className={styles.inputData}>
                    <label>Пароль</label>
                    <input
                        value={pass} onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="Введите пароль"></input>
                </div>
                <div className={styles.btn}>
                    <button
                        onClick={() => navigate()}>Войти</button>
                </div>
            </form>
        </div>
    )
}