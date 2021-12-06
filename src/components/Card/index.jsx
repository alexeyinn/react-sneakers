import React, { useState, useEffect } from "react";
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
  cartItems,
  setCartItems,
  favorited,
  inCart,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorited);
  }, [favorited]);

  useEffect(() => {
    setIsAdded(inCart);
  }, [inCart]);

  const onPlus = async () => {
    setIsAdded(!isAdded);
    let objForCart = { id, itemTitle, itemSrc, itemPrice };
    onAdd(objForCart);
    let checkCart = cartItems.find(
      (item) => item.itemSrc === objForCart.itemSrc
    );

    try {
      if (checkCart) {
        axios.delete(
          `https://61a4c68d4c822c0017041e68.mockapi.io/cart/${checkCart.id}`
        );
        setCartItems(cartItems.filter((item) => item.id !== checkCart.id));
      } else {
        let { data } = await axios.post(
          "https://61a4c68d4c822c0017041e68.mockapi.io/cart",
          objForCart
        );
        onAdd(data);
      }
    } catch (error) {
      alert(`Ошибка сервера: ${error} Попробуйте снова!`);
    }
  };

  const toFavorite = async () => {
    setIsFavorite(!isFavorite);
    let objForFavorite = { id, itemTitle, itemSrc, itemPrice };
    onFavorite(objForFavorite);
    let checkFavorite = favorites.find(
      (item) => item.itemSrc === objForFavorite.itemSrc
    );

    try {
      if (checkFavorite) {
        axios.delete(
          `https://61a4c68d4c822c0017041e68.mockapi.io/favorites/${checkFavorite.id}`
        );
        setFavorites(favorites.filter((item) => item.id !== checkFavorite.id));
      } else {
        let { data } = await axios.post(
          "https://61a4c68d4c822c0017041e68.mockapi.io/favorites",
          objForFavorite
        );
        onFavorite(data);
      }
    } catch (error) {
      alert(`Ошибка сервера: ${error} Попробуйте снова!`);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
          onClick={toFavorite}
        />
      </div>
      <img className="sneakersPhoto" src={itemSrc} alt="sneakers" />
      <h5>{itemTitle}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{itemPrice}</b>
        </div>
        <button className="button" onClick={onPlus}>
          <img
            src={isAdded ? "/img/added-to-cart.svg" : "/img/add-to-cart.svg"}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
