import React, { useState } from "react";
import axios from "axios";

import styles from "./Card.module.scss";

function Card({ itemTitle, itemSrc, itemPrice, onAdd }) {
  const [isAdded, setIsAdded] = useState("/img/add-to-cart.svg");

  const onPlus = () => {
    setIsAdded("/img/added-to-cart.svg");
    let objForCart = { itemTitle, itemSrc, itemPrice };
    onAdd(objForCart);
    axios.post("https://61a4c68d4c822c0017041e68.mockapi.io/cart", objForCart);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img className="sneakersPhoto" src={itemSrc} alt="sneakers" />
      <h5>{itemTitle}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{itemPrice}</b>
        </div>
        <button className="button" onClick={onPlus}>
          <img src={isAdded} alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
