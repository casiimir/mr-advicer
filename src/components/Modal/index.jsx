import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/actions';

export default ({ advice, reload }) => {
  const showModal = useSelector((state) => state.showModal.isOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      show={showModal}
      onHide={() => {
        dispatch(toggleModal());
        reload();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
          Mr Advice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>{advice}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => {
            dispatch(toggleModal());
          }}
        >
          Close
        </Button>
        <Button
          variant="info"
          onClick={() => {
            reload();
          }}
        >
          Reload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
