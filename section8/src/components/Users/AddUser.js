import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
function AddUser(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };
  const userAgeChange = (e) => {
    setUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (Number(userAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserAge('');
    setUserName('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={userAgeChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
