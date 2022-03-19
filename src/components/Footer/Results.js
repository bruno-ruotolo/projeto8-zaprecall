import PartyEmoji from "../../assets/partyemoji.svg"
import Sad from "../../assets/sad.svg"

export default function Results(props) {
  const { icons } = props;

  for (let i = 1; i < icons.length; i++) {
    if (icons[i].props.src.includes("redX")) {
      return (
        <>
          <div className="result-text">
            <img src={Sad} alt="Sad" />
            <strong>PUTZ!</strong>
          </div>
          <span><p>Ainda faltaram alguns... Mas não desanime!</p></span>
        </>
      )
    }
  }

  return (
    <>
      <div className="result-text">
        <img src={PartyEmoji} alt="PartyEmoji" />
        <strong>PARABÉNS!</strong>
      </div>
      <span><p>Você não esqueceu de nenhum flashcard!</p></span>
    </>
  )
}