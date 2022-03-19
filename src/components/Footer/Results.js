export default function Results(props) {
  const { icons } = props;
  console.log(icons[1].props.src);

  for (let i = 1; i < icons.length; i++) {
    if (icons[i].props.src === "./assets/redX.svg") {
      console.log("Tem o RedX")
      return (
        <>
          <div className="result-text">
            <img src="./assets/sad.png" alt="Sad" />
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
        <img src="./assets/partyemoji.svg" alt="Happy" />
        <strong>PARABÉNS!</strong>
      </div>
      <span><p>Você não esqueceu de nenhum flashcard!</p></span>
    </>
  )
}
