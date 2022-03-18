import FlashCard from "./FlashCard";
import React from "react";
import FlashCardsInformations from "./FlashCardsInformations";

export default function FlashCards() {
  return (
    <div className="flashcards">
      {
        FlashCardsInformations().map((flashCard, index) => {
          const { question, answer } = flashCard;
          return (
            < FlashCard
              key={question}
              question={question}
              answer={answer}
              questionNumber={index + 1}
            />
          )
        })
      }
    </div>
  );
};

