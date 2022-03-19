import React from "react"
import FlashCards from "./FlashCards"
import FlashCardsInformations from "./FlashCardsInformations";
import SmallLogo from "../../assets/logo-pequeno.svg"

export default function FlashcardsScreen() {
  let shuffleCards = [];
  shuffleCards = FlashCardsInformations().sort(() => Math.random() - 0.5);

  return (
    <section className="flashcards-screen">
      <div className="logo">
        <img src={SmallLogo} alt="Logo Pequena" />
        <h2>ZapRecall</h2>
      </div>
      <FlashCards shuffleCards={shuffleCards} />

    </section>
  )
}