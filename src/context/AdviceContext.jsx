import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const AdviceContext = createContext();

export const AdviceProvider = ({ children }) => {
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
    <AdviceContext.Provider
      value={[dataAPI, setDataAPI, reloadAdvice, setReloadAdvice]}
    >
      {children}
    </AdviceContext.Provider>
  );
};
