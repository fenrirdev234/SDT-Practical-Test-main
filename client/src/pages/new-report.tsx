import * as React from 'react';
import {ReportForm} from '@/components/dashboard/single-appointment/forms/report-form';
import { Box, Button,  Stack} from '@mui/material';
import { CardReport } from '@/components/dashboard/single-appointment/card/card-report';
import { type InterfaceReport } from '@/types/report';
import { toast } from 'sonner';
import { postReport } from '@/services/axios.services';



const reportTemplate={
  costCode: '',
  description: '',
  images: [],
}


export function Page(): React.JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [report, setReport] = React.useState<InterfaceReport>(reportTemplate);

const [allReports, setAllReports]= React.useState<InterfaceReport[]>([])




const saveReports=():void=>{


if(report.description==="" || report.costCode===""){
  toast.error("description and cost code are required")
  return
}

 if(allReports.length===0){
  setAllReports([report])
  setReport(reportTemplate)
}


if(allReports.some((item=>item.description!== report.description ))){
  setAllReports([...allReports ,report])
  setReport(reportTemplate)
  } 
}



const removeReport=(revomeDescription:string):void=>{
  const newReport=  allReports.filter((item)=> item.description !== revomeDescription)
  setAllReports(newReport)
}


  const handleSubmit = (e: React.FormEvent):void=> {
if(allReports.length===0){
  return
}
    
    e.preventDefault();
    if(allReports.length){
      postReport(allReports).then(()=>{
        toast.success('Report uploaded successfully')
    }).catch((error)=>{
      if (error instanceof Error) {
        toast.error(error.message)
    } else {
        throw error;
    }
  })
}
  // NOTE TO CANDIDATE: 
    // This is where you would send the report to the database, implement logic

}

  return (
    <div style={{ padding: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:"column", gap:"20px" }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '100%', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center' }}>Create New Report</h1>
        <ReportForm
          loading={loading}
          report={report}
          sendReportToDatabase={saveReports}
          setReport={setReport}
        />
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '100%', maxWidth: '600px' }}>
      <Box sx={{ sm: { padding: 0 }, md: { padding: 3 } }}>
      <Stack spacing={3}>
      <Button
          disabled={allReports.length === 0} // Disable button if form is invalid or loading is true
          onClick={handleSubmit}
          size="large"
          sx={{ width: '100%' }}
          variant="outlined"
        >
          {loading ? 'Loading...' : `Upload ${allReports.length} new reports`}
        </Button>
      </Stack>
      </Box>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '100%', maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center' }}>All Reports</h2>
        <Stack spacing={2}>
        {allReports.map((data, index)=>(
          <CardReport
          costCode={data.costCode}
          description={data.description}
          index={index}
          key={data.description}
          removeReport={removeReport}/>
        ))}
        </Stack>
      </div>
    </div>
  );
}
