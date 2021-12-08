import { useContext, useState } from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";

import AppContext from "../../context";
import styles from "./Drawer.module.scss";
import InfoBlock from "../InfoBlock";

function Drawer() {
  const { cartItems, setCartItems, cartIsOpened, setCartIsOpened } =
    useContext(AppContext);

  let totalPrice = useCart();

  let dataForBlock = {
    imageSrc: "/img/empty-cart.png",
    title: "Корзина пустая",
    description: "Вы еще не оформили заказ",
  };

  let [hasOrder, setHasOrder] = useState(dataForBlock);
  let [loading, setLoading] = useState(false);

  const onRemove = (idForRemove) => {
    axios.delete(
      `https://61a4c68d4c822c0017041e68.mockapi.io/cart/${idForRemove}`
    );
    setCartItems((prev) => prev.filter((item) => item.id !== idForRemove));
  };

  const doOrder = async () => {
    setLoading(true);
    try {
      let { data } = await axios.post(
        "https://61a4c68d4c822c0017041e68.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setCartItems([]);
      setHasOrder({
        imageSrc: "/img/order.svg",
        title: "Заказ оформлен!",
        description: `Ваш заказа №${data.id} скоро будет передан курьерской доставке`,
      });
      for (let i = 0; i < cartItems.length; i++) {
        await axios.delete(
          `https://61a4c68d4c822c0017041e68.mockapi.io/cart/${i + 1}`
        );
      }
    } catch (error) {
      alert(`Ошибка сервера: ${error} Попробуйте снова!`);
    }
    setLoading(false);
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
            <InfoBlock dataForBlock={hasOrder} />
          )}
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} руб. </b>
            </li>
            <li>
              <span>+ Налог 8%</span>
              <div></div>
              <b>{totalPrice * 0.08} руб.</b>
            </li>
          </ul>
          <button disabled={loading} onClick={doOrder} className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
