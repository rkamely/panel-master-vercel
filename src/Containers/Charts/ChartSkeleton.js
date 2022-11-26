import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function ChartSkeleton() {


    return (
            <Stack spacing={1} style={{padding:'15px'}}>
                <Stack spacing={1} style={{ display:'flex',flexDirection:'row',alignItems:'center',margin:'35px 0'}}>
                    <Skeleton variant="rounded" width={'50%'} height={40} style={{margin:'0'}} />
                    <Skeleton variant="rounded" width={'15%'} height={40} style={{margin:'0 8px'}} />
                </Stack>
                <Skeleton variant="rounded" width={'100%'} height={20} style={{margin:'5px 0'}} />
                <Skeleton variant="rounded" width={'100%'} height={20} style={{margin:'5px 0'}} />
                <Skeleton variant="rounded" width={'100%'} height={20} style={{margin:'5px 0'}} />
                <Skeleton variant="rounded" width={'100%'} height={20} style={{margin:'5px 0'}} />
                <Stack spacing={1} style={{ display:'flex',flexDirection:'row',alignItems:'center',margin:'35px 0'}}>
                    <Skeleton variant="rounded" width={'15%'} height={40} style={{margin:'0'}} />
                    <Skeleton variant="rounded" width={'15%'} height={40} style={{margin:'0 8px'}} />
                    <Skeleton variant="rounded" width={'15%'} height={40} style={{margin:'0 8px'}} />
                </Stack>
            </Stack>
    );
}

export default ChartSkeleton;