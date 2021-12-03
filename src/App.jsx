import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer/";
import Header from "./components/Header/";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("https://60d62397943aa60017768e77.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://61a4c68d4c822c0017041e68.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
    axios
      .get("https://61a4c68d4c822c0017041e68.mockapi.io/favorites")
      .then((res) => setFavorites(res.data));
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
                cartItems={cartItems}
                favorites={favorites}
                setFavorites={setFavorites}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/favorites"
            exact
            element={
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
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
