export default function FlashCard(props) {
  const { question, answer } = props;

  return (
    <div className="flashcards">
      <article className="options">
        <p>Pergunta 1</p>
        <img src="./assets/play.svg" alt="play" />
      </article>

      {/* <article className="card-front">
        <p>{question}</p>
        <img src="./assets/roundicon.svg" alt="Icon" />
      </article> */}

      {/* <article className="card-back">
        <p>{answer}</p>
        <div>
          <button className="bg-red">Não lembrei</button>
          <button className="bg-orange">Quase não lembrei</button>
          <button className="bg-green">Zap!</button>
        </div>
      </article> */}


      {/* 
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
      </article> */}

    </div>
  )

}