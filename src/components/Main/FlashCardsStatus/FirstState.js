import PlayButtom from "../../../assets/play.svg"

export default function FirstState(props) {
  const { setChangeStatus, questionNumber } = props;

  return (
    < article className="options" >
      <p>Pergunta {questionNumber}</p>
      <img src={PlayButtom} alt="play" onClick={() => setChangeStatus(2)} />
    </article >
  )
}