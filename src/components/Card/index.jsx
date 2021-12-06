import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

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
  loaded,
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
      {loaded ? (
        <>
          <div className={styles.favorite}>
            <img
              src={
                isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
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
                src={
                  isAdded ? "/img/added-to-cart.svg" : "/img/add-to-cart.svg"
                }
                alt="plus"
              />
            </button>
          </div>
        </>
      ) : (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      )}
    </div>
  );
}

export default Card;
