import { useContext } from "react";
import AppContext from "../context";

import styles from "./Drawer/Drawer.module.scss";

function InfoBlock({ dataForBlock }) {
  const { cartIsOpened, setCartIsOpened } = useContext(AppContext);

  return (
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
        src={dataForBlock.imageSrc}
        alt="Empty"
      />
      <h2>{dataForBlock.title}</h2>
      <p className="opacity-6">{dataForBlock.description}</p>
      <button
        onClick={() => setCartIsOpened(!cartIsOpened)}
        className="greenButton"
      >
        <img className="backArrow" src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default InfoBlock;
