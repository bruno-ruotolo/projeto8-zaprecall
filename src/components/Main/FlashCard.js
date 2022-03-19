import React from "react";
import FirstState from "./FlashCardsStatus/FirstState";
import SecondState from "./FlashCardsStatus/SecondState"
import ThirdState from "./FlashCardsStatus/ThirdState"
import FourthOneState from "./FlashCardsStatus/FourthOneState";
import FourthTwoState from "./FlashCardsStatus/FourthTwoState"
import FourthThreeState from "./FlashCardsStatus/FourthThreeState"

export default function FlashCard(props) {
  const { question, answer, questionNumber, callBack } = props;
  const [changeStatus, setChangeStatus] = React.useState(1)

  if (changeStatus === 1) {
    return (
      <FirstState questionNumber={questionNumber} setChangeStatus={(value) => setChangeStatus(value)} />
    );
  }

  else if (changeStatus === 2) {
    return (
      <SecondState question={question} setChangeStatus={(value) => setChangeStatus(value)} />
    )
  }

  else if (changeStatus === 3) {
    return (
      <ThirdState callBack={(value, iconName) => callBack(value, iconName)} setChangeStatus={(value) => setChangeStatus(value)} answer={answer} />
    )
  }

  else if (changeStatus === 4.1) {
    return (
      <FourthOneState questionNumber={questionNumber} />
    )

  }
  else if (changeStatus === 4.2) {
    return (
      <FourthTwoState questionNumber={questionNumber} />
    )
  }
  else if (changeStatus === 4.3) {
    return (
      <FourthThreeState questionNumber={questionNumber} />
    )
  }
};