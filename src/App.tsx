import "./App.css";
import Button from "./components/buttons/Button";

const App = () => {
  return (
    <div>
      <Button label="Primary" type="primary" />
      <Button label="Secondary" type="secondary" />
      <Button label="Inverted" type="inverted" />
    </div>
  );
};

export default App;
