import Greeting from "./Greeting";
import Button from "./Button";

function App() {
  return (
    <div className="container">
      <Greeting name="Sara" />
      <Greeting name="Cahal" />
      <Greeting name="Edite" />
      <Button />
    </div>
  );
}

export default App;

