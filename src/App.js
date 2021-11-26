import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div className="App clear">
        <Drawer />
        <Header />
        <div className="content p-40">
          <div className="mb-40 align-between justify-between d-flex">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
