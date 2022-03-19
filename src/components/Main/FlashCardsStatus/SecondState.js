import RoundIcon from "../../../assets/roundicon.svg"

export default function FirstState(props) {
  const { setChangeStatus, question } = props;

  return (
    <article className="card-front">
      <p>{question}</p>
      <img src={RoundIcon} alt="Icon" onClick={() => setChangeStatus(3)} />
    </article>
  )
}