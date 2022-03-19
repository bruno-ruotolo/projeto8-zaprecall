export default function QuestionCounter(props) {
  const { totalQuestion, total } = props;

  return (
    <p>{total}/{totalQuestion} CONCLUÍDOS</p>
  )
}