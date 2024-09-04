import { useState } from 'react';

export const useScreenNumber = () => {
  const [screenNumber, setScreenNumber] = useState(0);
  return [screenNumber, setScreenNumber];
};