import styles from "./Card.module.scss";

function Card({ itemTitle, itemSrc, itemPrice, onAdd }) {
  const onPlus = () => {
    onAdd({ itemTitle, itemSrc, itemPrice });
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
          <img src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
