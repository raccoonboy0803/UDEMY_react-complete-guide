import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState('2020');
  const filterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChange} selected={filterYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
