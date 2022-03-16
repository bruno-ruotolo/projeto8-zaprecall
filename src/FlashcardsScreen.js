export default function FlashcardsScreen() {
  return (
    <section className="flashcards-screen">
      <div className="logo">
        <img src="./assets/logo-pequeno.svg" alt="Logo Pequena" />
        <h2>ZapRecall</h2>
      </div>

      <div className="flashcards">

        <article className="options">
          <p>Pergunta 1</p>
          <img src="./assets/play.svg" alt="play" />
        </article>

        <article className="card-front">
          <p>O que é JSX?</p>
          <img src="./assets/roundicon.svg" alt="Icon" />
        </article>

        <article className="card-back">
          <p>JSX é uma sintaxe para
            escrever HTML dentro do JS</p>
          <div>
            <button className="bg-red">Não lembrei</button>
            <button className="bg-orange">Quase não lembrei</button>
            <button className="bg-green">Zap!</button>
          </div>
        </article>

        <article className="options selected color-red">
          <p>Pergunta 2</p>
          <img src="./assets/redX.svg" alt="X" />
        </article>

        <article className="options selected color-orange">
          <p>Pergunta 3</p>
          <img src="./assets/questionmark.svg" alt="?" />
        </article>

        <article className="options selected color-green">
          <p>Pergunta 4</p>
          <img src="./assets/checkmark.svg" alt="Correct" />
        </article>

      </div>

      <footer>

        {/* <p>0/4 CONCLUÍDOS</p> */}

        <div className="result-text">
          <img src="./assets/partyemoji.svg" alt="" />
          <strong>PARABÉNS!</strong>
        </div>
        <span><p>Você não esqueceu de nenhum flashcard!</p></span>

        <div className="selected-marks ">
          <img src="./assets/redX.svg" alt="X" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" />
          <img src="./assets/redX.svg" alt="X" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" />
          <img src="./assets/questionmark.svg" alt="?" />
          <img src="./assets/checkmark.svg" alt="Correct" />
        </div>
      </footer>
    </section>
  )
}