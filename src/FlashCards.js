import FlashCard from "./FlashCard";
import React from "react";

export default function FlashCards() {

  const flashCards = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },

    { question: " O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },

    { question: "Componentes devem iniciar com __ ", answer: "Letra maiúscula" },

  ];
  return (
    <div className="flashcards">
      {
        flashCards.map((flashCard) => {
          const { question, answer } = flashCard;
          return (
            < FlashCard
              key={question}
              question={question}
              answer={answer}
            />
          )
        })
      }
    </div>
  );
};

