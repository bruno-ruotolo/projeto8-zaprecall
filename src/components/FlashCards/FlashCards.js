import FlashCard from "./FlashCard";
import React from "react";
import Results from "./Results"

export default function FlashCards(props) {
  const shuffleCards = props.shuffleCards
  const [status, setStatus] = React.useState({ total: 0, icon: [<></>] })
  const { total, icon } = status;

  return (
    <>
      <Results total={total} icons={icon} />
      <div className="flashcards">
        {
          shuffleCards.map((flashCard, index) => {
            const { question, answer } = flashCard;
            return (
              < FlashCard
                key={question}
                question={question}
                answer={answer}
                questionNumber={index + 1}
                callBack={(value, iconName) => setStatus({ ...status, total: total + value, icon: [...icon, iconName] })}
              />
            )
          })
        }
      </div>

    </>
  );
};

