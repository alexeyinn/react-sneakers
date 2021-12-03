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
            itemTitle={items.itemTitle}
            itemSrc={items.itemSrc}
            itemPrice={items.itemPrice}
            onAdd={(obj) => props.setCartItems([...props.cartItems, obj])}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
