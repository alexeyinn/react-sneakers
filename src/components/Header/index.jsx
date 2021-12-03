import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className={styles.headerLeft + " d-flex align-center"}>
          <img src="img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li
          className="mr-30"
          onClick={() => props.setCartIsOpened(!props.cartIsOpened)}
        >
          <img src="img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img className="mr-30" src="img/favorite.svg" alt="favorites" />
          </Link>
        </li>
        <li>
          <img src="img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
