import Card from "../components/Card";

function Home(props) {
  const onInput = (e) => {
    props.setInputValue(e.target.value);
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
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {props.items
          .filter((item) =>
            item.title.toLowerCase().includes(props.inputValue.toLowerCase())
          )
          .map((items) => (
            <Card
              key={items.id}
              itemTitle={items.title}
              itemSrc={items.imageUrl}
              itemPrice={items.price}
              onAdd={(obj) => props.setCartItems([...props.cartItems, obj])}
              onFavorite={(obj) =>
                props.setFavorites([...props.favorites, obj])
              }
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
