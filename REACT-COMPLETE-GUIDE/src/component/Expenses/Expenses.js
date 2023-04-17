import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((a) => (
        <ExpenseItem
          key={a.id}
          title={a.title}
          amount={a.amount}
          date={a.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
