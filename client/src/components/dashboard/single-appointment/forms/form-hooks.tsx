import type { InterfaceReport } from '@/types/report';
import type * as React from 'react';
import { useCallback, useState } from 'react';
// import type { Report } from '@/interfaces/tables';

interface UseFormHookReturnType {
  isDescriptionValid: boolean;
  selectedOption: string;
  validateForm: () => void;
  updateCostCode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFieldChange: (field: keyof InterfaceReport, value: InterfaceReport[keyof InterfaceReport]) => void;
  handleSelectionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleKeyAdd: <K extends keyof InterfaceReport>(field: K, value: InterfaceReport[K]) => void;
}

interface UseFormHookParams {
  report: InterfaceReport;
  setReport: React.Dispatch<React.SetStateAction<InterfaceReport>>;
}

export const useFormHook = ({ report, setReport }: UseFormHookParams): UseFormHookReturnType => {
  const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleFieldChange = useCallback(
    (field: keyof InterfaceReport, value: InterfaceReport[keyof InterfaceReport]) => {
      setReport((prev) => ({ ...prev, [field]: value }));
    },
    [setReport]
  );

  const validateForm: UseFormHookReturnType['validateForm'] = useCallback(() => {
    setIsDescriptionValid(Boolean(report?.description?.trim()));
  }, [report?.description]);

  const updateCostCode: UseFormHookReturnType['updateCostCode'] = useCallback(
    (event) => {
      handleFieldChange('costCode', event.target.value.trim());
    },
    [handleFieldChange]
  );

  const handleSelectionChange: UseFormHookReturnType['handleSelectionChange'] = useCallback((event) => {
    setSelectedOption(event.target.value);
    // Add logic to update the report if needed
  }, []);

  const handleKeyAdd: UseFormHookReturnType['handleKeyAdd'] = useCallback(
    <K extends keyof InterfaceReport>(field: K, value: InterfaceReport[K]) => {
      handleFieldChange(field, value);
    },
    [handleFieldChange]
  );

  return {
    isDescriptionValid,
    selectedOption,
    validateForm,
    updateCostCode,
    handleFieldChange,
    handleSelectionChange,
    handleKeyAdd,
  };
};
