import React from "react";
import FlashCardsInformations from "../FlashCards/FlashCardsInformations";
import QuestionCounter from "./QuestionsCounter";
import Results from "./Results";

export default function Footer(props) {
  const { total, icons } = props;
  const questionNumber = FlashCardsInformations().length;

  return (
    < footer >

      {total === questionNumber ? <Results icons={icons} /> : <QuestionCounter total={total} totalQuestion={questionNumber} />}

      <div className="selected-marks ">
        {icons}

      </div>
    </footer >
  )
}