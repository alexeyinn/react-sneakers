import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <div className={styles.overlay} style={{ display: "none" }}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>
        <div className={styles.items}>
          <div className={styles.cartItem + " d-flex align-center mb-20"}>
            <img className="mr-20" src="/img/sneakers/1.jpg" alt="sneakers" />
            <div className="mr-20">
              <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/img/btn-remove.svg" alt="remove" />
          </div>
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
