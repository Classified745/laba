import React, {FormEvent, useEffect, useState} from 'react';


export function Home() {
    const [result, setResult] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        const userdata = async () => {
            try {
                const request = await fetch("http://localhost:3001/user", {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await request.json();
                setResult(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        }
        userdata();
    },[]);

    return (
        <div>
            <b>
                id : {result?.id}
            </b>
                <br/>
            {/*<b>*/}
            {/*    id : {result?.createdAt}*/}
            {/*</b>*/}
            {/*    <br/>*/}
            <b>
                username : {result?.nickname}
            </b>
        </div>
    );
}
