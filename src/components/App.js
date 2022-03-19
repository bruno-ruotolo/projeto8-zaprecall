import WelcomeScreen from "./WelcomeScreen";
import FlashcardsScreen from "./Main/FlashcardsScreen";
import "./../css/reset.css"
import "./../css/styles.css"
import "./../css/mediaqueries.css"

export default function App() {
  return (
    <>
      <WelcomeScreen />
      <FlashcardsScreen />
    </>
  )
}
