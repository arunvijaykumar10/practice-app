import "./App.css";
import "./components/buttons/accordian/accordian.css";
import Button from "./components/buttons/Button";
import Accordian from "./components/buttons/accordian/Accordian";
import Counter from "./components/counter/Counter";

const data = [
  {
    title: "What is a dog?",
    content:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  },
  {
    title: "What kinds of dogs are there?",
    content:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },
  {
    title: "How do you acquire a dog?",
    content:
      "Three common ways for a prospective owner to acquire a dog are from pet shops, private owners, or shelters.",
  },
];

const App = () => {
  return (
    <div>
      <Button label="Primary" type="primary" />
      <Button label="Secondary" type="secondary" />
      <Button label="Inverted" type="inverted" />
      <div className="border">
      {data.map((element) => (
        <Accordian title={element.title} content={element.content} />
      ))}
      </div>
      <Counter/>
    </div>
  );
};
export default App;
