import { useState } from 'react';

export default function useErrors() {
  const [erros, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = erros.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorsMEssageByFieldName(fieldName) {
    return erros.find((error) => error.field === fieldName)?.message;
  }

  return {
    setError, removeError, getErrorsMEssageByFieldName
  };
}
