import { useState } from 'react';

export function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue(initialValue);
  const handleChange = e => setValue(e.target.value);

  return [value, handleChange, reset];
}