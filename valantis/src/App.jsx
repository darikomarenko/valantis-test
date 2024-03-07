import './App.css'
import List from './components/List/List'
import md5 from 'md5';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const password = "Valantis"
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const authString = md5(`${password}_${timestamp}`)

    const fetchData = async () => {
        try {
            const res = await fetch("http://api.valantis.store:40000/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth': authString,
                },
                body: JSON.stringify({
                    "action": "get_ids",
                    "params": { "offset": 0, "limit": 10 },
                }),
            });
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 401) {
                throw new Error('UnauthorizedErrorCode');
            } else if (res.status === 400) {
                throw new Error('ErrorCode')
            }
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    };
    fetchData();
}, []);

  return (
    <>
        <List />
    </>
  )
}

export default App
