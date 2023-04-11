import { FormEvent } from 'react';

export const useForm = (fn: () => void) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fn();
  };

  return {
    handleSubmit
  };
};
