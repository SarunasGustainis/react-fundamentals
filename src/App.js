import logo from "./logo.svg";
import "./App.css";

function FirstReactComponent() {
  return <p>I am new here!</p>;
}

function ChildrenWithTitle({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="I am title">I am children</ChildrenWithTitle>
    </div>
  );
}

export default App;
