import Card from "../components/Card";

function Favorites(props) {
  return (
    <div className="content p-40">
      <div className="mb-40 align-between justify-between d-flex">
        <h1>Избранное</h1>
      </div>
      <div className="d-flex flex-wrap">
        {props.favorites.map((items) => (
          <Card
            key={items.id}
            id={items.id}
            itemTitle={items.itemTitle}
            itemSrc={items.itemSrc}
            itemPrice={items.itemPrice}
            onAdd={(obj) => props.setCartItems([...props.cartItems, obj])}
            favorites={props.favorites}
            setFavorites={props.setFavorites}
            onFavorite={(obj) => props.setFavorites([...props.favorites, obj])}
            inCart={props.cartItems.some(
              (item) => item.itemSrc === items.itemSrc
            )}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            favorited
            loaded
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
