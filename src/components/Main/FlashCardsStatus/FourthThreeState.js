import CheckMark from "../../../assets/checkmark.svg"

export default function FourthOneState(props) {
  const { questionNumber } = props;

  return (
    <article className="options selected color-green">
      <p>Pergunta {questionNumber}</p>
      <img src={CheckMark} alt="Correct" />
    </article>
  )
}