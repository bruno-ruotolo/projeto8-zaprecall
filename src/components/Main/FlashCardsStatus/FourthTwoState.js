import QuestionMark from "../../../assets/questionmark.svg"

export default function FourthOneState(props) {
  const { questionNumber } = props;

  return (
    <article className="options selected color-orange">
      <p>Pergunta {questionNumber}</p>
      <img src={QuestionMark} alt="?" />
    </article>
  )
}