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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let cartRes = await axios.get(
        "https://61a4c68d4c822c0017041e68.mockapi.io/cart"
      );
      let favoriteRes = await axios.get(
        "https://61a4c68d4c822c0017041e68.mockapi.io/favorites"
      );
      let itemsRes = await axios.get(
        "https://60d62397943aa60017768e77.mockapi.io/items"
      );

      setCartItems(cartRes.data);
      setFavorites(favoriteRes.data);
      setItems(itemsRes.data);

      setIsLoaded(true);
    };

    fetchData();
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
                isLoaded={isLoaded}
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
