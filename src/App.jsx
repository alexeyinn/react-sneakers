import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Drawer from "./components/Drawer/";
import Header from "./components/Header/";

function App() {
  const [items, setItems] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
