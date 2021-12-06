import Card from "../components/Card";

function Home(props) {
  const onInput = (e) => {
    props.setInputValue(e.target.value);
  };

  const onRemoveInput = () => {
    props.setInputValue("");
  };

  const renderCards = () => {
    // return [...Array(8)].map(() => <Card />);
    //loaded={(props.isLoaded = false)}
    return props.isLoaded
      ? props.items
          .filter((item) =>
            item.title.toLowerCase().includes(props.inputValue.toLowerCase())
          )
          .map((items) => (
            <Card
              key={items.id}
              id={items.id}
              itemTitle={items.title}
              itemSrc={items.imageUrl}
              itemPrice={items.price}
              favorites={props.favorites}
              setFavorites={props.setFavorites}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              onAdd={(obj) => props.setCartItems([...props.cartItems, obj])}
              onFavorite={(obj) =>
                props.setFavorites([...props.favorites, obj])
              }
              favorited={props.favorites.some(
                (item) => item.itemSrc === items.imageUrl
              )}
              inCart={props.cartItems.some(
                (item) => item.itemSrc === items.imageUrl
              )}
              loaded={props.isLoaded}
            />
          ))
      : [...Array(8)].map((item, index) => <Card key={index} />);
  };

  return (
    <div className="content p-40">
      <div className="mb-40 align-between justify-between d-flex">
        <h1>
          {props.inputValue ? "Поиск по: " + props.inputValue : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onInput}
            value={props.inputValue}
            placeholder="Поиск..."
          />
          <img onClick={onRemoveInput} src="/img/btn-remove.svg" alt="remove" />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderCards()}</div>
    </div>
  );
}

export default Home;
