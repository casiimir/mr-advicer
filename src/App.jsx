import { useState } from 'react';
import { AdviceProvider } from './context/AdviceContext';

import Modal from './components/Modal/index';
import { Button } from 'react-bootstrap';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <AdviceProvider>
      <div className="App">
        <Button
          variant="warning"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Get an Advice
        </Button>
        {showModal && <Modal isOpen={showModal} onClose={setShowModal} />}
      </div>
    </AdviceProvider>
  );
}

export default App;
