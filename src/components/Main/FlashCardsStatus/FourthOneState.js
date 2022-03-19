import RedX from "../../../assets/redX.svg"

export default function FourthOneState(props) {
  const { questionNumber } = props;

  return (
    <article className="options selected color-red">
      <p>Pergunta {questionNumber}</p>
      <img src={RedX} alt="X" />
    </article>
  )
}

