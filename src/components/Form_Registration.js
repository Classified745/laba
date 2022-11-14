import React, {useState} from "react";
import styles from "./Form.module.css";
export type FormData = {
    login : string;
    password: string;
    password_one: string;
}

type FormProps ={
    onSubmit: (data: FormData) => void ;
}


export function Registration_Form({onSubmit}: FormProps){
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password_one, setPassword_one] = useState("");
    const [passwordError_one, setPasswordError_one] = useState("");

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        setPasswordError("");
        setPasswordError_one("");
        if (login.length === 0)
        {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита!");
            result = false;
        }

        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        if (password.length === 0 && password_one.length === 0) {
            setPasswordError("Поля 'Пароль' и 'Повтор пароля' не может быть пустым.");
            result = false;
        }
        if (password_one !== password) {
            setPasswordError_one("Пароли должны совпадать");
            result = false;
        }

        return result;
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid()) {
            onSubmit({
                login,
                password,
                password_one
            });
            setLogin("");
            setPassword("");
            setPassword_one("");
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
            <div>
                <label>Повтор пароля:
                    <input
                        type="password"
                        value={password_one}
                        onChange={e => setPassword_one(e.target.value)}/>
                </label>
            </div>
            {passwordError && <div className={styles.error}>{passwordError}</div> }
            {passwordError_one && <div className={styles.error}>{passwordError_one}</div> }
            <button type="submit">Войти</button>
        </form>
    </>;
}

