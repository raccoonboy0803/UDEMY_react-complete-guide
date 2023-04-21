import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}

export default ErrorModal;
