import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState('2020');
  const filterChange = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChange} selected={filterYear} />
        {items.map((a) => (
          <ExpenseItem
            key={a.id}
            title={a.title}
            amount={a.amount}
            date={a.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
