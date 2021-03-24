import axios from 'axios';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './redux/actions';

import Modal from './components/Modal/index';
import { Button } from 'react-bootstrap';
import './App.scss';

function App() {
  // const adviceData = useSelector((state) => state.adviceData.data);
  const showModal = useSelector((state) => state.showModal.isOpen);
  const dispatch = useDispatch();

  // Get data from API (not optimized yet)
  const [dataAPI, setDataAPI] = useState([]);
  const [reloadAdvice, setReloadAdvice] = useState(false);

  useEffect(() => {
    const getDataAPI = async () => {
      const res = await axios('https://api.adviceslip.com/advice');
      setDataAPI(res.data.slip.advice);
    };

    getDataAPI();
  }, [reloadAdvice]);

  return (
    <div className="App">
      <Button
        variant="warning"
        onClick={() => {
          dispatch(toggleModal());
        }}
      >
        Get an Advice
      </Button>
      {showModal && (
        <Modal advice={dataAPI} reload={() => setReloadAdvice(!reloadAdvice)} />
      )}
    </div>
  );
}

export default App;
