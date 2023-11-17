import { ChangeEvent, useState } from 'react';
type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useFormInput = () => {
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps: InputProps = {
    value: value,
    onChange: handleChange,
  };
  return inputProps;
};

export default useFormInput;
