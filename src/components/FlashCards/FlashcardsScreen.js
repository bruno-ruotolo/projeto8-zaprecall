import React from "react"
import FlashCards from "./FlashCards"
import FlashCardsInformations from "./FlashCardsInformations";

export default function FlashcardsScreen() {
  let shuffleCards = [];
  shuffleCards = FlashCardsInformations().sort(() => Math.random() - 0.5);
  console.log(shuffleCards);

  return (
    <section className="flashcards-screen">
      <div className="logo">
        <img src="./assets/logo-pequeno.svg" alt="Logo Pequena" />
        <h2>ZapRecall</h2>
      </div>
      <FlashCards shuffleCards={shuffleCards} />

    </section>
  )
}