function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img src="img/logo.png" alt="logo" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src="img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;