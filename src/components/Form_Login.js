import React, {useState} from "react";
import styles from "./Form.module.css";

export type FormData = {
    login : string;
    password: string;
}

type FormProps ={
    onSubmit: (data: FormData) => void ;
}

export function Login_Form({onSubmit}: FormProps){
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        setPasswordError("");
        if (login.length === 0)
        {
            setLoginError("Поле 'Логин' должно быть заполнено");
            result = false;
        }

        if (password.length === 0) {
            setPasswordError("Поле 'Пароль' не может быть пустым.");
            result = false;
        }
        return result;
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid()) {
            onSubmit({
                login,
                password
            });
            setLogin("");
            setPassword("");
        }
    };

    return <>
        <form onSubmit={submitHandler}>
            <div>
                <label>Логин:
                    <input
                        value={login}
                        onChange={e => setLogin(e.target.value)}/>
                </label>
            </div>
            {loginError && <div className={styles['error']}>{loginError}</div> }
            <div>
                <label>Пароль:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>
            {passwordError && <div className={styles.error}>{passwordError}</div> }
            <button type="submit" >Войти</button>
        </form>
    </>;
}