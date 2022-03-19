import React from "react";


export default function FlashCard(props) {
  const { question, answer, questionNumber, callBack } = props;
  const [changeStatus, setChangeStatus] = React.useState(1)

  if (changeStatus === 1) {
    return (
      <article className="options">
        <p>Pergunta {questionNumber}</p>
        <img src="./assets/play.svg" alt="play" onClick={() => setChangeStatus(2)} />
      </article>
    )
  }

  else if (changeStatus === 2) {
    return (
      <article className="card-front">
        <p>{question}</p>
        <img src="./assets/roundicon.svg" alt="Icon" onClick={() => setChangeStatus(3)} />
      </article>
    )
  }

  else if (changeStatus === 3) {
    return (
      <article className="card-back">
        <p>{answer}</p>
        <div>
          <button className="bg-red" onClick={() => {
            callBack(1, <img src={"./assets/redX.svg"} alt="redX" />);
            setChangeStatus(4.1);
          }}
          >Não lembrei</button>

          <button className="bg-orange" onClick={() => {
            callBack(1, <img src={"./assets/questionmark.svg"} alt="questionmark" />);
            setChangeStatus(4.2);
          }}>Quase não lembrei</button>

          <button className="bg-green" onClick={() => {
            callBack(1, <img src={"./assets/checkmark.svg"} alt="checkmark" />);
            setChangeStatus(4.3);
          }}
          >Zap!</button>

        </div>
      </article>
    )
  }

  else if (changeStatus === 4.1) {
    return (
      <article className="options selected color-red">
        <p>Pergunta {questionNumber}</p>
        <img src="./assets/redX.svg" alt="X" />
      </article>
    )

  }

  else if (changeStatus === 4.2) {
    return (
      <article className="options selected color-orange">
        <p>Pergunta {questionNumber}</p>
        <img src="./assets/questionmark.svg" alt="?" />
      </article>

    )
  }

  else if (changeStatus === 4.3) {
    return (
      <article className="options selected color-green">
        <p>Pergunta {questionNumber}</p>
        <img src="./assets/checkmark.svg" alt="Correct" />
      </article>
    )
  }
};