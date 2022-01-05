import "./App.css";
import Mensaje from "./Mensaje";

const Titulo = () => {
  return <h1>Hola mundo</h1>;
};
const App = () => {
  return (
    <div className="App">
      <Titulo />
      <Mensaje color="blue" message="Este es el primer mensaje" />
      <Mensaje color="red" message="Este es el segundo mensaje" />
    </div>
  );
};

export default App;
