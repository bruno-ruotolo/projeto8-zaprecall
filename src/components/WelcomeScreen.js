import React from "react"
import Logo from "../assets/logo.svg"


export default function WelcomeScreen() {
  const [changeScreen, setChangeScreen] = React.useState(false);

  if (changeScreen) {

    return <></>
  } else {
    return (
      <section className="welcome-screen">
        <div>
          <article className="main-logo">
            <img src={Logo} alt="Recall Logo" />
            <h1>ZapRecall</h1>
          </article>

          <button onClick={() => setChangeScreen(!changeScreen)}>Iniciar Recall!</button>
        </div>
      </section >
    )
  }
}