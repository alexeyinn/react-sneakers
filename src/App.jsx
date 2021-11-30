import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card/";
import Drawer from "./components/Drawer/";
import Header from "./components/Header/";

function App() {
  const [items, setItems] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://60d62397943aa60017768e77.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://61a4c68d4c822c0017041e68.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  return (
    <div>
      <div className="App clear">
        {cartIsOpened && (
          <Drawer
            cartIsOpened={cartIsOpened}
            setCartIsOpened={setCartIsOpened}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
        <Header cartIsOpened={cartIsOpened} setCartIsOpened={setCartIsOpened} />
        <div className="content p-40">
          <div className="mb-40 align-between justify-between d-flex">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {items &&
              items.map((items) => (
                <Card
                  key={items.id}
                  itemTitle={items.title}
                  itemSrc={items.imageUrl}
                  itemPrice={items.price}
                  onAdd={(obj) => setCartItems([...cartItems, obj])}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
