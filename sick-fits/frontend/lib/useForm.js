import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(event) {
    setInputs({
      // copy existing state
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  // return what we want to surface from this custom hook
  return {
    inputs,
    handleChange,
  };
}
