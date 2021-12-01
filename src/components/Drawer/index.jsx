import axios from "axios";

import styles from "./Drawer.module.scss";

function Drawer(props) {
  const onRemove = (idForRemove) => {
    axios.delete(
      `https://61a4c68d4c822c0017041e68.mockapi.io/cart/${idForRemove}`
    );
    props.setCartItems((prev) =>
      prev.filter((item) => item.id !== idForRemove)
    );
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
            onClick={() => props.setCartIsOpened(!props.cartIsOpened)}
          />
        </h2>
        <div className={styles.items}>
          {props.cartItems.length > 0 ? (
            props.cartItems.map((item) => (
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
              class={
                styles.cartEmpty +
                " d-flex align-center justify-center flex-column flex"
              }
            >
              <img
                class="mb-20"
                width="120px"
                height="120px"
                src="/img/empty-cart.png"
                alt="Empty"
              />
              <h2>Корзина пустая</h2>
              <p class="opacity-6">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button
                onClick={() => props.setCartIsOpened(!props.cartIsOpened)}
                class="greenButton"
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
