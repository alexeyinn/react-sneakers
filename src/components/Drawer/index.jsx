import { useContext } from "react";
import axios from "axios";

import AppContext from "../../context";
import styles from "./Drawer.module.scss";

function Drawer() {
  const { cartItems, setCartItems, cartIsOpened, setCartIsOpened } =
    useContext(AppContext);

  const onRemove = (idForRemove) => {
    axios.delete(
      `https://61a4c68d4c822c0017041e68.mockapi.io/cart/${idForRemove}`
    );
    setCartItems((prev) => prev.filter((item) => item.id !== idForRemove));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="close"
            onClick={() => setCartIsOpened(!cartIsOpened)}
          />
        </h2>
        <div className={styles.items}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className={styles.cartItem + " d-flex align-center mb-20"}
              >
                <img className="mr-20" src={item.itemSrc} alt="sneakers" />
                <div className="mr-20">
                  <p className="mb-5">{item.itemTitle}</p>
                  <b>{item.itemPrice}</b>
                </div>
                <img
                  onClick={() => onRemove(item.id)}
                  src="/img/btn-remove.svg"
                  alt="remove"
                />
              </div>
            ))
          ) : (
            <div
              className={
                styles.cartEmpty +
                " d-flex align-center justify-center flex-column flex"
              }
            >
              <img
                className="mb-20"
                width="120px"
                height="120px"
                src="/img/empty-cart.png"
                alt="Empty"
              />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button
                onClick={() => setCartIsOpened(!cartIsOpened)}
                className="greenButton"
              >
                <img className="backArrow" src="/img/arrow.svg" alt="Arrow" />
                Вернуться назад
              </button>
            </div>
          )}
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 8%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
