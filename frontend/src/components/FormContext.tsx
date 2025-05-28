// FormContext.js
import { UseFormReturnType } from '@mantine/form';
import { createContext, useContext } from 'react';

//type of FormContext
interface FormContextType {
    form: UseFormReturnType<any>;
    handleSubmit: (values: any) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContext.Provider');
  }
  return context;
}
// throw error if context doesn't exist
