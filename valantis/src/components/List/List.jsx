import { useEffect, useState } from "react";
import axios from 'axios';

function List() {
  const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://api.valantis.store:40000/')
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, console.log([]));
    return (
        <div>

        </div>
    );
}

export default List;