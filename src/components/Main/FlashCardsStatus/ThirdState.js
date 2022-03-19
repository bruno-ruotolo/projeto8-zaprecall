import QuestionMark from "../../../assets/questionmark.svg"
import CheckMark from "../../../assets/checkmark.svg"
import RedX from "../../../assets/redX.svg"

export default function ThirdState(props) {
  const { callBack, setChangeStatus, answer } = props;

  return (
    <article className="card-back">
      <p>{answer}</p>
      <div>
        <button className="bg-red" onClick={() => {
          callBack(1, <img key={answer + Math.random() * 100} src={RedX} alt="redX" />);
          setChangeStatus(4.1);
        }}
        >Não lembrei</button>

        <button className="bg-orange" onClick={() => {
          callBack(1, <img key={answer + Math.random() * 100} src={QuestionMark} alt="questionmark" />);
          setChangeStatus(4.2);
        }}>Quase não lembrei</button>

        <button className="bg-green" onClick={() => {
          callBack(1, <img key={answer + Math.random() * 100} src={CheckMark} alt="checkmark" />);
          setChangeStatus(4.3);
        }}
        >Zap!</button>

      </div>
    </article>
  )
}