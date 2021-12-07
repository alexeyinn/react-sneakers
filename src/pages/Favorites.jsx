import { useContext } from "react";

import Card from "../components/Card";
import AppContext from "../context";

function Favorites() {
  const { favorites, setFavorites, cartItems, setCartItems } =
    useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="mb-40 align-between justify-between d-flex">
        <h1>Избранное</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((items) => (
          <Card
            key={items.id}
            id={items.id}
            itemTitle={items.itemTitle}
            itemSrc={items.itemSrc}
            itemPrice={items.itemPrice}
            onAdd={(obj) => setCartItems([...cartItems, obj])}
            onFavorite={(obj) => setFavorites([...favorites, obj])}
            inCart={cartItems.some((item) => item.itemSrc === items.itemSrc)}
            favorited
            loaded
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
