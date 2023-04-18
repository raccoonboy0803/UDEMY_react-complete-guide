import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((a) => (
        <ExpenseItem
          key={a.id}
          title={a.title}
          amount={a.amount}
          date={a.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
