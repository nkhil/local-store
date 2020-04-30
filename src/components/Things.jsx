import React from 'react';
import { useAppState } from '../appContext';

const Things = () => {
  const [{things, alsoThings}, dispatch] = useAppState();
  return (
    <>
      <ul>
        {things.map((thing, index) => (
          <li 
            key={index} 
            onClick={() => dispatch({ type: 'IS_ALSO_THING', thing })}
          >
            {thing}
          </li>
        ))}
      </ul>
    </>
  )
};

export default Things;
