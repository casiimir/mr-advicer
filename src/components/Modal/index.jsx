import { Modal, Button } from 'react-bootstrap';

import { useContext } from 'react';
import { AdviceContext } from '../../context/AdviceContext';

export default ({ isOpen, onClose }) => {
  const value = useContext(AdviceContext);
  const [dataAPI, setDataAPI, reloadAdvice, setReloadAdvice] = value;

  return (
    <Modal
      show={isOpen}
      onHide={() => {
        onClose(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
          Mr Advice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>{dataAPI}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => {
            onClose(false);
          }}
        >
          Close
        </Button>
        <Button
          variant="info"
          onClick={() => {
            setReloadAdvice(!reloadAdvice);
          }}
        >
          Reload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
