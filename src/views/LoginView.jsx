import React, {useState} from 'react';
import type {FormData} from "../components/Form_Login";
import {Login_Form} from "../components/Form_Login";
import styles from "../components/Form.module.css";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (data: FormData) => {
        console.log("Received data:", data);
        //setError("");
        try {
            const response = await fetch("http://localhost:3001/auth", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        nickname: data.login,
                        password: data.password
                    })
                }
            );
            if (response.status !== 200) {
                const error = await response.json();
                console.log(error);
                throw Error(error.error);
            }
            else{
                navigate('/')
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return (
        <div>
            <div className={styles['error']}> {error}</div>
            <Login_Form onSubmit={onSubmit}/>
        </div>
    );
};

export default LoginView;