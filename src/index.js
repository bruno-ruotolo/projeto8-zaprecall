import ReactDom from "react-dom";
import WelcomeScreen from "./WelcomeScreen";
import FlashcardsScreen from "./FlashcardsScreen";

function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      <FlashcardsScreen />
    </>
  )
}

let rootClass = document.querySelector(".root");

ReactDom.render(<App />, rootClass);