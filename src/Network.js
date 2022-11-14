import {FormEvent, useState} from "react";


const URL = "https://jsonplaceholder.typicode.com/posts";

export function Fetcher() {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        try {
            const request = await fetch(`${URL}/${id}`);
            const data = await request.json();
            setResult(data);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <br/>
        </label>
        <button type="submit">Получить данные!</button>
        {result &&
        <div>
            <b>
                userID : {result?.userId}
            </b>
            <br/>
            <b>
                ID : {result?.id}
            </b>
            <br/>
            <b>
               Title : {result?.title}
            </b>
            <br/>
            <b>
            Body : {result?.body}
            </b>
        </div>}
        {error &&
        <div>
            {error}
        </div>}
    </form>;
}