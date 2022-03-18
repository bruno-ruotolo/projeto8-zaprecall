import FlashCards from "./FlashCards"

export default function FlashcardsScreen() {
  return (
    <section className="flashcards-screen">
      <div className="logo">
        <img src="./assets/logo-pequeno.svg" alt="Logo Pequena" />
        <h2>ZapRecall</h2>
      </div>

      <FlashCards />

      <footer>

        <p>0/4 CONCLUÍDOS</p>

        {/* <div className="result-text">
          <img src="./assets/partyemoji.svg" alt="" />
          <strong>PARABÉNS!</strong>
        </div>
        <span><p>Você não esqueceu de nenhum flashcard!</p></span> */}

        <div className="selected-marks ">
          {/* <img src="./assets/redX.svg" alt="X" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" />
          <img src="./assets/redX.svg" alt="X" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" /> */}
        </div>
      </footer>
    </section>
  )
}