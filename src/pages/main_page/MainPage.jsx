import styles from './MainPage.module.css'
import { useNavigate } from 'react-router-dom'

export const MainPage = () =>{
    const navigate = useNavigate('')

    return(
        <div className={styles.mainPage}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <img src='/img/logo.png' alt='logo'/>
                </div>
                <h1 className={styles.h}>Scrum-приложение</h1>
                <div className={styles.btn}>
                    <button
                        onClick={() => navigate('/Members')}>Начать разминку</button>
                </div>
                <div className={styles.btn}>
                    <button
                        onClick={() => navigate('/SingIn')}>Войти</button>
                </div>
                <p className={styles.text}>или</p>
                <div className={styles.btn}>
                    <button
                        onClick={() => navigate('/SingUp')}>Зарегистрироваться</button>
                </div>
                
            </div>
        </div>
    )
}