import React, { useState } from "react";
import axios from "axios";

import styles from "./Card.module.scss";

function Card({
  id,
  itemTitle,
  itemSrc,
  itemPrice,
  onAdd,
  onFavorite,
  favorites,
  setFavorites,
}) {
  const [isAdded, setIsAdded] = useState("/img/add-to-cart.svg");
  const [isFavorite, setIsFavorite] = useState("/img/heart-unliked.svg");

  const onPlus = () => {
    setIsAdded("/img/added-to-cart.svg");
    let objForCart = { itemTitle, itemSrc, itemPrice };
    onAdd(objForCart);
    axios.post("https://61a4c68d4c822c0017041e68.mockapi.io/cart", objForCart);
  };

  const toFavorite = async () => {
    setIsFavorite("/img/heart-liked.svg");
    let objForFavorite = { id, itemTitle, itemSrc, itemPrice };
    onFavorite(objForFavorite);
    let isFavorite = favorites.find(
      (item) => item.itemSrc === objForFavorite.itemSrc
    );

    try {
      if (isFavorite) {
        axios.delete(
          `https://61a4c68d4c822c0017041e68.mockapi.io/favorites/${isFavorite.id}`
        );
        setFavorites(favorites.filter((item) => item.id !== isFavorite.id));
      } else {
        let { data } = await axios.post(
          "https://61a4c68d4c822c0017041e68.mockapi.io/favorites",
          objForFavorite
        );
        onFavorite(data);
      }
    } catch (error) {
      alert(`Ошибка сервера ${error} Попробуйте снова!`);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={isFavorite} alt="unliked" onClick={toFavorite} />
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
