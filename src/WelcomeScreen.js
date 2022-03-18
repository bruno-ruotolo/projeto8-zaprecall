import React from "react"

export default function WelcomeScreen() {
  const [changeScreen, setChangeScreen] = React.useState(false);

  if (changeScreen) {
    return <></>
  } else {
    return (
      <section className="welcome-screen">
        <div>
          <article className="main-logo">
            <img src="./assets/logo.svg" alt="Recall Logo" />
            <h1>ZapRecall</h1>
          </article>

          <button onClick={() => setChangeScreen(!changeScreen)}>Iniciar Recall!</button>
        </div>
      </section >
    )
  }
}