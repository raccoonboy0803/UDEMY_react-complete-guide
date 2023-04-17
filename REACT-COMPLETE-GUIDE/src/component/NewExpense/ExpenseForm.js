import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseFrom = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const { title, amount, date } = userInput;
  const change = (e) => {
    const { value, name } = e.target;
    // setUserInput({
    //   ...userInput,
    //   [name]: value,
    // });
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={title} onChange={change} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={amount}
            onChange={change}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            value={date}
            onChange={change}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseFrom;
