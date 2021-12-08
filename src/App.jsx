import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import AppContext from "./context.js";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Drawer from "./components/Drawer/";
import Header from "./components/Header/";
import Orders from "./pages/Orders.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartIsOpened, setCartIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
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
    } catch (error) {
      alert(`Ошибка сервера: ${error} Попробуйте снова!`);
    }
  }, []);

  return (
    <>
      <div className="App clear">
        <AppContext.Provider
          value={{
            favorites,
            setFavorites,
            items,
            cartItems,
            setCartItems,
            cartIsOpened,
            setCartIsOpened,
            inputValue,
            setInputValue,
            isLoaded,
          }}
        >
          {cartIsOpened && <Drawer />}
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorites" exact element={<Favorites />} />
            <Route path="/orders" exact element={<Orders />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
