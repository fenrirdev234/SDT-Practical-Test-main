import * as React from 'react';
import type { JSX } from 'react';
import { useEffect } from 'react';
// import type { Issue, Report } from '@/interfaces/tables';
import {
  Box,
  Button,
  Stack,
} from '@mui/material';

import { useFormHook } from './form-hooks';

import { RepairsForm } from './repairs-form';
import { type InterfaceReport } from '@/types/report';

interface ReportFormProps {
  loading: boolean;
  report: InterfaceReport; // Define a more specific type if possible
  setReport: React.Dispatch<React.SetStateAction<InterfaceReport>>;
  sendReportToDatabase: () => void;
}

  // NOTE TO CANDIDATE
  // report and setReport are the main props that are passed to the form

export function ReportForm({
  loading,
  report,
  setReport,
  sendReportToDatabase
}: ReportFormProps): JSX.Element {

  const { validateForm } = useFormHook({
    report,
    setReport,
  });

  /* useEffect(() => {
    handleFieldChange('type', formType);
  }, [formType, handleFieldChange]); */

  useEffect(() => {
    validateForm();
  }, [report, validateForm]);

  return (
    <Box sx={{ sm: { padding: 0 }, md: { padding: 3 } }}>
      <Stack spacing={3}>
        <RepairsForm  report={report} setReport={setReport}/>
        {/* Directly render the appropriate form component */}
          {/* <GeneralForm report={report} setReport={setReport} /> */}

        {/* NOTE TO CANDIDATE */}
        {/* We are keen on implementing forms in a modular way. So they can be combined and imported form any part of the application*/}
        {/* Feel free to follow this structure to create your form. Creating new components or component to populate this from passing down setReport */}

        {/* Example - RepairsForm that could be added */}
        {/* <RepairsForm  report={report} setReport={setReport} /> */}

        <Button
          disabled={loading} // Disable button if form is invalid or loading is true
          onClick={()=>{ sendReportToDatabase()}}
          size="large"
          sx={{ width: '100%' }}
          variant="outlined"
        >
          {loading ? 'Loading...' : 'Upload Report'}
        </Button>
      </Stack>
    </Box>
  );
}
