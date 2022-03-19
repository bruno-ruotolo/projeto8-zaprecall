import React from "react";
import FlashCardsInformations from "./FlashCardsInformations";



export default function Results(props) {
  const { total, icons } = props;

  return (
    < footer >
      <p>{total}/{FlashCardsInformations().length} CONCLUÍDOS</p>

      {/* <div className="result-text">
      <img src="./assets/partyemoji.svg" alt="" />
      <strong>PARABÉNS!</strong>
    </div>
    <span><p>Você não esqueceu de nenhum flashcard!</p></span> */}

      <div className="selected-marks ">
        {icons}
        {/* 
      <img src="./assets/checkmark.svg" alt="Correct" />
      />
      <img src="./assets/questionmark.svg" alt="?" />
      <img src="./assets/checkmark.svg" alt="Correct" />
      <img src="./assets/questionmark.svg" alt="?" />
      <img src="./assets/checkmark.svg" alt="Correct" /> */}
      </div>
    </footer >
  )
}