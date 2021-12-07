import { useContext } from "react";

import AppContext from "../context";
import Card from "../components/Card";

function Home() {
  const {
    favorites,
    setFavorites,
    items,
    cartItems,
    setCartItems,
    inputValue,
    setInputValue,
    isLoaded,
  } = useContext(AppContext);

  const onInput = (e) => {
    setInputValue(e.target.value);
  };

  const onRemoveInput = () => {
    setInputValue("");
  };

  const renderCards = () => {
    return isLoaded
      ? items
          .filter((item) =>
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((items) => (
            <Card
              key={items.id}
              id={items.id}
              itemTitle={items.title}
              itemSrc={items.imageUrl}
              itemPrice={items.price}
              onAdd={(obj) => setCartItems([...cartItems, obj])}
              onFavorite={(obj) => setFavorites([...favorites, obj])}
              favorited={favorites.some(
                (item) => item.itemSrc === items.imageUrl
              )}
              inCart={cartItems.some((item) => item.itemSrc === items.imageUrl)}
            />
          ))
      : [...Array(8)].map((item, index) => <Card key={index} />);
  };

  return (
    <div className="content p-40">
      <div className="mb-40 align-between justify-between d-flex">
        <h1>{inputValue ? "Поиск по: " + inputValue : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input onChange={onInput} value={inputValue} placeholder="Поиск..." />
          <img onClick={onRemoveInput} src="/img/btn-remove.svg" alt="remove" />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderCards()}</div>
    </div>
  );
}

export default Home;
