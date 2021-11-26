function App() {
  return (
    <div>
      <div className="App clear">
        <div className="overlay">
          <div className="drawer">
            <h2>Корзина</h2>
            .cartItem
          </div>
        </div>
        <header className="d-flex justify-between align-center p-40">
          <div className="headerLeft d-flex align-center">
            <img src="img/logo.png" alt="logo" />
            <div className="headerInfo">
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кросовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img src="img/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img src="img/user.svg" alt="user" />
            </li>
          </ul>
        </header>
        <div className="content p-40">
          <div className="mb-40 align-between justify-between d-flex">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex">
            <div className="card">
              <div className="favourite">
                <img src="/img/heart-unliked.svg" alt="unliked" />
              </div>
              <img
                className="sneakersPhoto"
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
              <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="sneakersPhoto"
                src="/img/sneakers/2.jpg"
                alt="sneakers"
              />
              <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="sneakersPhoto"
                src="/img/sneakers/3.jpg"
                alt="sneakers"
              />
              <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="sneakersPhoto"
                src="/img/sneakers/4.jpg"
                alt="sneakers"
              />
              <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
