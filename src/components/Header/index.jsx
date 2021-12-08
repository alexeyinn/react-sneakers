import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../context";
import styles from "./Header.module.scss";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { cartIsOpened, setCartIsOpened } = useContext(AppContext);

  let totalPrice = useCart();

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
        <li className="mr-30" onClick={() => setCartIsOpened(!cartIsOpened)}>
          <img src="img/cart.svg" alt="cart" />
          <span>{totalPrice} руб.</span>
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
