import { useState, useContext, useEffect } from "react";
import axios from "axios";

import AppContext from "../context";
import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { cartItems, setCartItems, favorites, setFavorites } =
    useContext(AppContext);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          "https://61a4c68d4c822c0017041e68.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      };
      fetchData();
    } catch (error) {
      alert(`Ошибка сервера: ${error} Попробуйте снова!`);
    }
  }, []);

  return (
    <div className="content p-40">
      <div className="mb-40 align-between justify-between d-flex">
        <h1>Заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {orders.map((items, index) => (
          <Card
            key={index}
            id={items.id}
            itemTitle={items.itemTitle}
            itemSrc={items.itemSrc}
            itemPrice={items.itemPrice}
            onAdd={(obj) => setCartItems([...cartItems, obj])}
            onFavorite={(obj) => setFavorites([...favorites, obj])}
            inCart={cartItems.some((item) => item.itemSrc === items.itemSrc)}
            favorited={favorites.some((item) => item.itemSrc === items.itemSrc)}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
