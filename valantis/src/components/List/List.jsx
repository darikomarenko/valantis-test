import { useEffect, useState } from "react";
import axios from 'axios';

function List() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://api.valantis.store:40000/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, console.log(items));

    if (Array.isArray(items)) {
      const productItems = items.map((item) => {
          return (

              <li className='items__list' key={item.id}>
                  <p className='items__number'>ID: {item.id}</p>
                  <h2 className='items__title'>Название: {item.title}</h2>
                  <p className='items__price'>Цена: {item.price}</p>
                  <p className='items__brend'>Бренд: {item.brend}</p>
              </li>

          );
      });
    return (
            <section className='item'>
                <h1 className='item__content'>Список товаров</h1>
                <ul className='item__lists'>
                    {productItems}
                </ul>
            </section>
    );
  } else {
    return <p>Данные о продуктах не найдены</p>;
}
}

export default List;