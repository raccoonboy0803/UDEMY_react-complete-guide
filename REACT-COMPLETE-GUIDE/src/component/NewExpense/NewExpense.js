import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [modal, setModal] = useState(false);
  const modalHandle = () => {
    setModal(!modal);
  };
  const saveExpenseData = (enteredUserInput) => {
    const userInput = {
      ...enteredUserInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(userInput);
  };

  return (
    <div className="new-expense">
      {modal ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <button onClick={modalHandle}>Add New Expense</button>
      )}
    </div>
  );
}
export default NewExpense;
