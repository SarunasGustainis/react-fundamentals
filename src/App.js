import logo from "./logo.svg";
import "./App.css";
import { FirstReactComponent } from "./FirstReactComponent.jsx";
import ChildrenWithTitle from "./ChildrenWithTitle.jsx";
import ConditionalRenderingComponent from "./ConditionalRenderingComponent.jsx";
import RenderingLists from "./RenderingLists.jsx";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="I am title">I am children</ChildrenWithTitle>
      <ConditionalRenderingComponent isBlue={true} />
      <ConditionalRenderingComponent isBlue={false} />
      <RenderingLists />
    </div>
  );
}

export default App;
