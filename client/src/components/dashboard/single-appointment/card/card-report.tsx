import { Box, Stack, Typography } from "@mui/material"
import type { JSX } from 'react';

import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Trash as DeleteIcon } from '@phosphor-icons/react';

interface CardReportProps {
  costCode: string;
  description: string;
  removeReport: (info: string)=>void
index: number
}

export function CardReport({
  costCode,
  description,
  removeReport
}:CardReportProps): JSX.Element  {

 
  return (
    <Stack spacing={2}>

        <Box
          sx={{
            alignItems: 'center',
            border: '1px var(--mui-palette-divider)',
            borderRadius: 1,

            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            outline: 'none',
            p: 6,

           bgcolor: 'var(--mui-palette-action-hover)'
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>

            <Avatar
             onClick={()=> { removeReport(description); }}
              sx={{
                '--Avatar-size': '60px',
                '--Icon-fontSize': 'var(--icon-fontSize-lg)',
                bgcolor: 'var(--mui-palette-background-paper)',
                boxShadow: 'var(--mui-shadows-8)',
                color: 'var(--mui-palette-text-primary)',
                cursor: 'pointer',
              }}
            >
              <DeleteIcon fontSize="24px" />
            </Avatar>
            <Stack spacing={1}>
              <Typography variant="h6">
                {costCode}
              </Typography>
              <Typography >
               {description}
              </Typography>
            </Stack>
          </Stack>
        </Box>
     
    </Stack>
  )
}

