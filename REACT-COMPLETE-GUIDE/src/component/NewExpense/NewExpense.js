import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const saveExpenseData = (enteredUserInput) => {
    const userInput = {
      ...enteredUserInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(userInput);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}
export default NewExpense;
