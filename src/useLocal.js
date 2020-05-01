import { useEffect } from 'react';
import { useAppState } from './appContext';

export default function useLocal() {
  let [state, dispatch] = useAppState();
  const basketLocal = JSON.parse(localStorage.getItem('basket') || "[]");
  
  useEffect(() => {
    dispatch({
      type: 'GET_FROM_LOCAL_STATE',
      basket: basketLocal,
    })
  }, [dispatch])
}
